var youniverse = {
  x: {
    nexus: 1.4395420537811414
  },
  y: {
    nexus: 6.281532559509658
  },
  z: {
    space: 7999999,
    universe: 1999999,
    galaxy: 99999,
    nexus: 1377,
    sun: 0.77,
    planets: {
      inner: 13,
      outer: 35
    }
  }
};

var GALAXY_TOUR = [
  /////////////////
  // INTRO
  /////////////////
  {
    rx: -0.12216429754294249,
    ry: 1.9989722678912,
    z: 7999999,
    travelTime: 2500,
    restTime: 2500,
    message: "“Welcome to YouMeOS.”"
  },
  {
    rx: -0.12216429754294249,
    ry: 1.9989722678912,
    z: 7999999,
    travelTime: 0,
    restTime: 2000,
    message: "“Your Personal Operating System for the Web.”"
  },
  {
    rx: -0.12216429754294249,
    ry: 1.9989722678912,
    z: 7999999,
    travelTime: 500,
    restTime: 2000,
    message: '"Let us begin our Journey!”'
  },
  {
    rx: -0.12216429754294249,
    ry: 6.9989722678912,
    z: 1999999,
    travelTime: 2500,
    restTime: 3000,
    message: '"Connecting to the Infinite Web…”'
  },
  {
    rx: -0.12216429754294249,
    ry: 6.9989722678912,
    z: 1999999,
    travelTime: 0,
    restTime: 2500,
    message: '"…visualizing data not just as lists, but as a universe.”'
  },
  {
    rx: 1,
    ry: 1,
    z: 999999,
    travelTime: 4000,
    restTime: 3000,
    message: "“Until now, we’ve been limited by traditional interfaces…”"
  },
  {
    rx: 1,
    ry: 1,
    z: 999999,
    travelTime: 0,
    restTime: 2500,
    message: '"…but here, you can see the bigger picture.”'
  },
  {
    rx: 1,
    ry: 6,
    z: 499999,
    travelTime: 4000,
    restTime: 3000,
    message: "“I’m here to give you the Key to your Digital Universe…”"
  },
  {
    rx: 1,
    ry: 6,
    z: 499999,
    travelTime: 0,
    restTime: 4000,
    message: "“…opening shortcuts through your data at Godspeed…”",
    callback: highlightMilkyWay
  },
  {
    rx: 1,
    ry: 6,
    z: 499999,
    travelTime: 0,
    restTime: 4000,
    message: "“…unraveling a new Operating System to navigate the Internet!”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: 99999,
    travelTime: 3000,
    restTime: 4000,
    message: "“Welcome to a revolutionary way to visualize the Web.”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: 99999,
    travelTime: 0,
    restTime: 4000,
    message: "“YOUR virtual Castle in the Cloud, where YOU reign Supreme!”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: 99999,
    travelTime: 0,
    restTime: 4000,
    message: '“Here, YOU have Super Freedom of Expression, Access, and Privacy!"'
  },
  /////////////////
  // END INTRO
  /////////////////

  // THE Galaxy of Stars
  {
    rx: 0,
    ry: 0.9,
    z: 199999,
    travelTime: 2000,
    restTime: 4000,
    message: "“In this Space, every Person, Place and Idea is a Star…”",
    callback: highlightMilkyWay
  },

  {
    rx: 0,
    ry: 0.9,
    z: 199999,
    travelTime: 2500,
    restTime: 3000,
    message: "“…Organized Synchronically as a 4D Galaxy.”"
  },

  //////////////
  // The NEXUS
  //////////////
  {
    rx: 1.4395420537811414,
    ry: 6.281532559509658,
    z: 1377,
    travelTime: 6000,
    restTime: 4000,
    message: "“This is YOUR NEXUS. Connecting Individuals, Groups, and whole Platforms…”"
  },
  {
    rx: 1.4395420537811414,
    ry: 6.281532559509658,
    z: 1077,
    travelTime: 1500,
    restTime: 3000,
    message: "“Your Nexus connects you with new People, Projects and Entities.”"
  },

  {
    rx: 6.281532559509658,
    ry: 1.4395420537811414,
    z: 800.99999999994,
    travelTime: 2000,
    restTime: 3000,
    message: "“As Time passes, your interactions Shine Brighter…”"
  },
  {
    rx: 6.281532559509658,
    ry: 1.4395420537811414,
    z: 500.99999999994,
    travelTime: 500,
    restTime: 3000,
    message: "“…bringing all that is important CLOSER to YOU.”"
  },

  {
    rx: 7,
    ry: 0.9,
    z: 99999,
    travelTime: 3000,
    restTime: 2000,
    message: "“What YOU interact with least…”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: 99999,
    travelTime: 0,
    restTime: 3500,
    message: "“…drifts away into the distance of your Galaxy.”",
    callback: highlightStarHeat
  },

  ////////
  // ENTER YOU: The SUN of the Universe
  ////////
  {
    rx: 1.4395420537811414,
    ry: 6.281532559509658,
    z: 777.97,
    travelTime: 3000,
    restTime: 5000,
    message: "“In your Universe, you determine your Gravitational Influence.”"
  },
  {
    rx: 1.4395420537811414,
    ry: 6.281532559509658,
    z: 0.97,
    travelTime: 6000,
    restTime: 5000,
    message: "“This is YOUR SUN, your Universal Core.”"
  },
  {
    rx: -0.18605511827781787,
    ry: -3.464222597755626,
    z: 0.87,
    travelTime: 1000,
    restTime: 2000,
    message: '"You are the center of your Digital Life!"'
  },

  {
    rx: 0.4395420537811414,
    ry: 5.281532559509658,
    z: 0.77,
    travelTime: 2000,
    restTime: 1500,
    message: '"You control your data..."'
  },
  {
    rx: -0.18605511827781787,
    ry: -2.464222597755626,
    z: 0.67,
    travelTime: 1000,
    restTime: 2000,
    message: "“...and who you share it with.”"
  },
  {
    rx: -0.18605511827781787,
    ry: -3.464222597755626,
    z: 0.57,
    travelTime: 1000,
    restTime: 2000,
    message: "“YOU are the MASTER of this Universe!”"
  },

  {
    rx: 0.8369933670834534,
    ry: 1.837770087331788,
    z: 5.148607771018531,
    travelTime: 1500,
    restTime: 2000,
    message: '"YOU are the Center of Your Web…"',
    callback: displaySunEarthDiagram
  },

  {
    rx: 0.6424544063335803,
    ry: -0.0031800804774647718,
    z: 7.23179619362583,
    travelTime: 1000,
    restTime: 2000,
    message: "“…weaving your own website…”"
  },
  {
    rx: 0.6424544063335803,
    ry: -0.0031800804774647718,
    z: 17.23179619362583,
    travelTime: 1000,
    restTime: 3000,

    message: '“…Sharing your thoughts on blogs or in group forums…"'
  },
  {
    rx: 0.6424544063335803,
    ry: -0.0031800804774647718,
    z: 277.23179619362583,
    travelTime: 1000,
    restTime: 2000,
    message: "“…Opening Shop, promoting your own endeavors…“"
  },
  {
    rx: 0.6424544063335803,
    ry: -0.0031800804774647718,
    z: 677.23179619362583,
    travelTime: 1000,
    restTime: 2000,
    message: "“…Offering Services and gifts YOU have for the WORLD.“"
  },
  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.nexus * 0.25,
    travelTime: 1000,
    restTime: 2000,
    message: '“All from YOUR Interconnected Universe."'
  },
  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.nexus * 0.5,
    travelTime: 1500,
    restTime: 2000,
    message: "“Let us build and improve Open Solutions together…”"
  },
  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.nexus * 0.75,
    travelTime: 1000,
    restTime: 2000,
    message: "“The Future is Ours!”"
  },

  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.nexus,
    travelTime: 2000,
    restTime: 2000,
    message: "“Expand to other Domains and Devices…”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.galaxy * 0.15,

    travelTime: 1000,
    restTime: 2000,
    message: '"…Connect with Everyone!”'
  },
  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.galaxy * 0.55,

    travelTime: 3000,
    restTime: 3000,
    message: "“YouMeOS is only the Beginning!”"
  },

  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.nexus * 0.5,

    travelTime: 2000,
    restTime: 2000,
    message: "“Be a part of the Next Best Thing!”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.galaxy * 0.75,

    travelTime: 1200,
    restTime: 2000,
    message: "“Do YOU want to PLAY?”"
  },

  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.galaxy,
    travelTime: 500,
    restTime: 2000,
    message: "“Get Started Today!”",
    callback: timeoutLogin
  }
];
var cinematic_width = 5;

var Tour = function (stops) {
  this.current = 0;
  this.states = stops;
  this.touring = false;
  this.timingBuffer = 0;
  this.timers = [];

  this.domElement = $('<div id="theater" />')
    .css({
      display: "none",
      position: "fixed",
      zIndex: 9998,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 100 + "%",
      height: 100 + "%"
    })
    .html(
      '<div class="top-bar"></div><div class="bottom-bar"></div><div class="message" style="display: none;"></div>'
    );

  this.top = this.domElement.find(".top-bar");
  this.bottom = this.domElement.find(".bottom-bar");
  this.content = this.domElement.find(".message");
  this.content.html("<p>" + this.states[0].message + "</p>");
};

// Statics
Tour.Easing = TWEEN.Easing.Sinusoidal.InOut;
Tour.Duration = 250;
Tour.meta = $("#meta");
Tour.timeouts = [];

// Proto
Tour.prototype = {
  getState: function () {
    var camera_state = {
      rx: camera.rotation.x,
      ry: camera.rotation.y,
      z: camera.position.z
    };

    var state;

    for (var m in this.states) {
      var s = this.states[m];
      if (camera_state.z === s.z) {
        state = s;
        break;
      }
    }

    return state || camera_state;
  },

  start: function () {
    var _this = this,
      next;
    if (_this.current == 0) {
      next = $('<a href="" />')
        .html("")
        .click(function (e) {
          e.preventDefault();
          _this.stop();
          // _this.next(true);
        });
    }

    _this.current = 0;
    _this.touring = false;
    _this.timingBuffer = 0;

    //  clear out everything if tour restarts
    _this.content.html("");
    Tour.meta.fadeOut();
    _this.domElement.fadeOut();

    var p = Tour.meta.find("p").html(next);
    Tour.meta.css({
      marginLeft: -Tour.meta.width() / 2 + "px"
    });

    this.show(function () {
      camera.__tour = this.touring = true;
      this.current = 0;
      this.next(true);
    });

    //  close the detail container if it's open
    $detailContainer.fadeOut();
    centerOn(new THREE.Vector3(0, 0, 0));
    if (markers.length > 0) markers[0].select();
    camera.position.target.x = 0;

    toggleHeatVision(false);

    $("#minimap").fadeOut();

    return this;
  },

  stop: function () {
    this.hide();

    camera.__tour = false;
    this.touring = false;

    rotateX = rotating.rotation.x;
    rotateY = rotating.rotation.y;
    TWEEN.removeAll();
    $("#minimap").fadeIn();

    return this;
  },

  show: function (callback) {
    var _this = this;

    this.domElement.appendTo(document.body).fadeIn(function () {
      Tour.meta.fadeIn();

      // Tour.meta.animate({
      //   marginBottom: cinematic_width + 'px'
      // }, Tour.Duration, 'swing');

      _this.bottom.animate(
        {
          marginBottom: 0
        },
        Tour.Duration,
        "swing"
      );

      _this.top.animate(
        {
          marginTop: 0
        },
        Tour.Duration,
        "swing",
        function () {
          if (callback) {
            callback.call(_this);
          }
        }
      );
    });

    return this;
  },

  hide: function (callback) {
    var _this = this;

    Tour.meta.fadeOut();

    // Tour.meta.animate({
    //   marginBottom: 0
    // }, Tour.Duration, 'swing');

    this.bottom.animate(
      {
        marginBottom: -cinematic_width + "px"
      },
      Tour.Duration,
      "swing"
    );

    this.top.animate(
      {
        marginTop: -cinematic_width + "px"
      },
      Tour.Duration,
      "swing",
      function () {
        _this.domElement.fadeOut();

        if (callback) {
          callback.call(_this);
        }
      }
    );

    return this;
  },

  showMessage: function (message, duration, callback) {
    var _this = this;
    _this.show();

    var onStart = function () {
      // console.log("starting message");
      _this.content.html("<p><small>" + message + "</small></p>");
      _this.content.fadeIn();

      var next = $('<a href="" />')
        .html("Skip")
        .click(function (e) {
          e.preventDefault();
          _this.hide();
          Tour.meta.fadeOut();
          _this.timingBuffer = 0.0;
          _this.clearTimers();
          firstTime = false;
          $(window).trigger("resize");
        });
      var p = Tour.meta.find("p").html(next);
      Tour.meta.css({
        marginLeft: -Tour.meta.width() / 2 + "px"
      });
    };
    _this.timers.push(window.setTimeout(onStart, _this.timingBuffer + 1000.0));

    var onFinished = function () {
      // console.log("ending messages");
      _this.content.fadeOut(function () {
        if (callback) callback();
        //_this.hide();
      });
    };

    _this.timingBuffer += duration + 1000.0;
    _this.timers.push(window.setTimeout(onFinished, _this.timingBuffer));

    // console.log( 'setting timeouts ', _this.timers );

    return this;
  },

  clearTimers: function () {
    for (var i in this.timers) {
      var timer = this.timers[i];
      window.clearTimeout(timer);
    }
    // console.log( 'clearing timeouts ', this.timers );
  },

  endMessages: function () {
    var _this = this;
    var timer = window.setTimeout(function () {
      _this.hide();
    }, _this.timingBuffer + 1000.0);
    _this.timers.push(timer);
  },

  next: function (continuous) {
    var _this = this;
    var state = (this.state = this.states[this.current]);

    _.each(Tour.timeouts, clearTimeout);

    if (this.current === this.states.length - 1) {
      //Tour.meta.find('a').html('Stop');
    }

    if (!state) {
      this.stop();
      return this;
    }
    this.current++;

    if (state.callback) this.arrivalCallback = state.callback;
    else this.arrivalCallback = undefined;

    if (this.content.css("display") != "none") {
      this.content.fadeOut(function () {
        _this.content.html("<p><span>" + state.message + "</span></p>");
      });
    } else {
      this.content.html("<p><span>" + state.message + "</span></p>");
    }

    this.rotating_tween = new TWEEN.Tween(rotating.rotation)
      .to(
        {
          x: state.rx,
          y: state.ry
        },
        state.travelTime
      )
      .easing(Tour.Easing)
      .start();

    this.camera_tween = new TWEEN.Tween(camera.position)
      .to(
        {
          z: state.z
        },
        state.travelTime
      )
      .easing(Tour.Easing)
      .onComplete(function () {
        camera.position.target.z = camera.position.z;
        if (_this.arrivalCallback) _this.arrivalCallback();
        _this.content.fadeIn(function () {
          Tour.timeouts.push(
            setTimeout(function () {
              if (continuous) {
                _this.next(true);
              }
            }, state.restTime)
          );
        });
      })
      .start();

    return this;
  },

  previous: function (continuous) {
    return this;
  }
};

// Method for saving out JSON objects of the tour
var getTourState = function (t1, t2, msg) {
  return JSON.stringify({
    rx: rotating.rotation.x,
    ry: rotating.rotation.y,
    z: camera.position.z,
    travelTime: t1 || 1500,
    restTime: t2 || 3000,
    message: msg || ""
  });
};
