//	list of shaders we'll load
var shaderList = [
  "shaders/starsurface",
  "shaders/starhalo",
  "shaders/starflare",
  "shaders/galacticstars",
  "shaders/galacticdust",
  "shaders/datastars",
  "shaders/cubemapcustom",
  "shaders/corona"
];

//	a small util to pre-fetch all shaders and put them in a data structure (replacing the list above)
function loadShaders(list, callback) {
  var shaders = {};

  var expectedFiles = list.length * 2;
  var loadedFiles = 0;

  function makeCallback(name, type) {
    return function (data) {
      if (shaders[name] === undefined) {
        shaders[name] = {};
      }

      shaders[name][type] = data;

      //	check if done
      loadedFiles++;
      if (loadedFiles == expectedFiles) {
        callback(shaders);
      }
    };
  }

  for (var i = 0; i < list.length; i++) {
    var vertexShaderFile = window.youmeosBaseUrl + "/" + list[i] + ".vsh";
    var fragmentShaderFile = window.youmeosBaseUrl + "/" + list[i] + ".fsh";

    //	find the filename, use it as the identifier
    var splitted = list[i].split("/");
    var shaderName = splitted[splitted.length - 1];
    // Use $.get instead of $(document).load to avoid overwriting DOM
    $.get(vertexShaderFile, makeCallback(shaderName, "vertex"));
    $.get(fragmentShaderFile, makeCallback(shaderName, "fragment"));
  }
}
