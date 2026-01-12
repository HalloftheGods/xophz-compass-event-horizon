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
  // THE AWAKENING
  /////////////////
  {
    rx: -0.12,
    ry: 2.0,
    z: 4000000,
    travelTime: 2500,
    restTime: 2500,
    message: "“Welcome to the Youniverse.”",
    callback: function () {
      window.overrideGalaxyOpacity = 0;
    }
  },
  {
    rx: -0.12,
    ry: 2.5,
    z: 2000000,
    travelTime: 1200,
    restTime: 2000,
    message: "“A YOU, Me, O.S.”"
  },
  {
    rx: 0.1,
    ry: 3.5,
    z: 1000000,
    travelTime: 2000,
    restTime: 3000,
    message: "“Behold... the Infinite Web of Information.”",
    callback: function () {
      materializeGalaxy(5000);
    }
  },
  {
    rx: 0.2,
    ry: 4.5,
    z: 500000,
    travelTime: 3000,
    restTime: 3000,
    message: "“Until Now, we’ve been locked away from an O.ptical S.olution…”"
  },
  {
    rx: 0.5,
    ry: 5.5,
    z: 250000,
    travelTime: 2000,
    restTime: 3500,
    message: "“...to the Internet, to our Technology, and this Dimensional Reality.”"
  },
  {
    rx: 1.0,
    ry: 6.0,
    z: 99999,
    travelTime: 4000,
    restTime: 4000,
    message: "“In this Space, every Person, Place and Idea is a Star…”",
    callback: highlightMilkyWay
  },
  {
    rx: 1.2,
    ry: 6.5,
    z: 49999,
    travelTime: 2000,
    restTime: 3000,
    message: "“…O.rganized S.ynchronically as a 4D Galaxy.”"
  },
  /////////////////
  // THE NEXUS
  /////////////////
  {
    rx: 1.439,
    ry: 6.281,
    z: 1377,
    travelTime: 6000,
    restTime: 4000,
    message: "“This is YOUR NEXUS.”"
  },
  /////////////////
  {
    rx: 1.439,
    ry: 6.281,
    z: 1077,
    travelTime: 1500,
    restTime: 3500,
    message: "“Integrating Individuals, Groups, and whole Platforms.”"
  },

  {
    rx: 6.281,
    ry: 1.439,
    z: 800,
    travelTime: 2500,
    restTime: 3000,
    message: "“As Time passes, your interactions Shine Brighter…”",
    callback: highlightStarHeat
  },
  {
    rx: 6.281,
    ry: 1.439,
    z: 400,
    travelTime: 1500,
    restTime: 3500,
    message: "“…magnetically gravitating all that is important to YOU.”"
  },

  /////////////////
  // THE CORE (USER)
  /////////////////
  {
    rx: 1.439,
    ry: 6.281,
    z: 777,
    travelTime: 3000,
    restTime: 3000,
    message: "“In your YOUniverse, you determine your Gravitational Influence.”"
  },
  {
    rx: 1.439,
    ry: 6.281,
    z: 0.97,
    travelTime: 6000,
    restTime: 5000,
    message: "“This is YOUR SUN. YOUR YOUniversal Core.”"
  },
  {
    rx: -0.186,
    ry: -3.464,
    z: 0.87,
    travelTime: 1500,
    restTime: 3000,
    message: '"Emanating YOUR Glorious Magnificence!"'
  },

  {
    rx: 0.439,
    ry: 5.281,
    z: 0.77,
    travelTime: 2000,
    restTime: 2000,
    message: '"I… am… YOU…"'
  },
  {
    rx: -0.186,
    ry: -2.464,
    z: 0.67,
    travelTime: 1000,
    restTime: 2000,
    message: "“…YOU… are… ME…”"
  },
  {
    rx: -0.186,
    ry: -3.464,
    z: 0.57,
    travelTime: 1000,
    restTime: 3000,
    message: "“…YOU are the MASTER of this YOU-IN-Verse!”"
  },

  /////////////////
  // THE CALL
  /////////////////
  {
    rx: 0.836,
    ry: 1.837,
    z: 5.148,
    travelTime: 2000,
    restTime: 3000,
    message: '"YOU are the Center of Your Web…"',
    callback: displaySunEarthDiagram
  },
  {
    rx: 0.642,
    ry: -0.003,
    z: 277,
    travelTime: 2000,
    restTime: 3000,
    message: "“...weaving your O.wn webbed S.ite.”"
  },
  {
    rx: youniverse.x.nexus,
    ry: youniverse.y.nexus,
    z: youniverse.z.nexus * 0.5,
    travelTime: 3000,
    restTime: 3000,
    message: "“WE are Infinite, WE are the Future!”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.galaxy * 0.75,
    travelTime: 2000,
    restTime: 2500,
    message: "“Do YOU want to PLAY?”"
  },
  {
    rx: 7,
    ry: 0.9,
    z: youniverse.z.galaxy,
    travelTime: 1000,
    restTime: 3000,
    message: "“KINNEXUS!”",
    callback: function () {
      window.overrideGalaxyOpacity = undefined; // Release control
      timeoutLogin();
    }
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
      width: "100%",
      height: "100%",
      background: "transparent",
      pointerEvents: "none"
    })
    .html(
      '<div class="top-bar" style="display:none;"></div>' +
        '<div class="bottom-bar" style="display:none;"></div>' +
        '<div class="message" style="display: none; position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%); text-align: center; width: 95%; max-width: 1600px; padding: 2.5rem 3rem; background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6); pointer-events: auto; z-index: 10; display: flex; align-items: center; justify-content: center;"></div>'
    );

  this.top = this.domElement.find(".top-bar");
  this.bottom = this.domElement.find(".bottom-bar");
  this.content = this.domElement.find(".message");

  this.content.css({
    color: "#fff",
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "1.8rem",
    fontWeight: "300",
    letterSpacing: "0.1em",
    lineHeight: "1.5",
    textShadow: "0 2px 15px rgba(0, 0, 0, 0.8)"
  });

  // Aggressive reset for legacy styles from styles/style.css
  $("<style>")
    .prop("type", "text/css")
    .html(
      "#theater .message { background: rgba(0, 0, 0, 0.65) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 2.5rem 3.5rem !important; } " +
        "#theater .message p { margin: 0 !important; padding: 0 !important; height: auto !important; line-height: 1.5 !important; color: #fff !important; background: transparent !important; text-shadow: 0 2px 15px rgba(0,0,0,0.8) !important; font-style: normal !important; } " +
        "#theater .message p span { background: transparent !important; padding: 0 !important; display: inline !important; }"
    )
    .appendTo("head");
};

// Statics
Tour.Easing = TWEEN.Easing.Quartic.InOut;
Tour.Duration = 800;
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

    if (typeof window.showOverlay === "function") {
      window.showOverlay();
    }
    if (typeof window.showLegacyUI === "function") {
      window.showLegacyUI();
    }

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

          if (typeof window.showOverlay === "function") {
            window.showOverlay();
          }
          if (typeof window.showLegacyUI === "function") {
            window.showLegacyUI();
          }
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

    // Fluid message transition: Fade out when move starts, fade in on arrival
    var updateContent = function () {
      _this.content.html("<p><span>" + state.message + "</span></p>");
      if (state.travelTime === 0) {
        _this.content.fadeIn(600);
      }
    };

    if (this.content.is(":visible")) {
      this.content.fadeOut(state.travelTime > 0 ? 600 : 300, updateContent);
    } else {
      updateContent();
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

        if (state.travelTime > 0) {
          _this.content.fadeIn(1000, function () {
            Tour.timeouts.push(
              setTimeout(function () {
                if (continuous) {
                  _this.next(true);
                }
              }, state.restTime)
            );
          });
        } else {
          Tour.timeouts.push(
            setTimeout(function () {
              if (continuous) {
                _this.next(true);
              }
            }, state.restTime)
          );
        }
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
