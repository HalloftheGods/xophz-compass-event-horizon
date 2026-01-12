/**
 * @author jonobr1 / http://jonobr1.com
 */

(function ($) {
  $.fn.tip = function (message) {
    var duration = 200;
    var $this = this;

    var tip = $('<div class="tip" />')
      .css({
        position: "absolute"
      })
      .html("<div>" + message + "</div>");

    var $window = $(window);

    var over = function () {
      var $elem = $this.parent();

      var rect = $elem[0].getBoundingClientRect();
      var offset = $elem.offset();
      var width = $elem.width();
      var height = $elem.height();

      // Position and show the new tip element
      tip
        .css({
          display: "none",
          top: rect.bottom + "px",
          left: 20 + "px",
          zIndex: 999999
        })
        .appendTo(document.body)
        .fadeIn(duration);
    };

    var out = function (e, forced) {
      if ($this.attr("id") == "tour-button" && !forced) {
        return;
      }

      tip.fadeOut(duration, function () {
        $(this).remove();
      });
    };

    this.hover(over, out).click(function (e) {
      e.preventDefault();
      out(e, true);
    });

    return this;
  };
})(jQuery);
