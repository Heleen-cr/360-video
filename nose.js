(document.onload = function() {

  // fill the sky with randomly positioned and sized noses
  for (i = 0; i < 250; i++) {
    randomNose(i);
  }

  function randomNose(i) {
    var nose = document.createElement('a-sphere');
    nose.id = 'random-nose-' + i;
    console.log(nose);
    var radius = (Math.random() * (0.1 - 1) + 1);
    var x = randomIntFromInterval(-180, 180);
    var y = randomIntFromInterval(10, 180);
    var z = randomIntFromInterval(-180, 180);
    var pos = {
      "x": x,
      "y": y,
      "z": z
    };
    setAttributes(nose, {
      "color": "red",
      "radius": radius,
      "position": pos,
    });
    var scene = document.getElementById("scene");
    scene.appendChild(nose);
  }


  AFRAME.registerComponent('nose-drop', {
    schema: {
      default: ''
    },
    init() {
      this.el.addEventListener('click', () => {
        // make all spheres drop out of the sky
        for (var i = 0; i < 250; i++) {
          var noseId = 'random-nose-' + i;
          var randomNose = document.getElementById(noseId);
          dropAnimation(randomNose);
        }
      });
    }
  });

  function dropAnimation(element) {
    var dropAnim = document.createElement('a-animation');
    setAttributes(dropAnim, {
      "attribute": "position",
      "to": "0 -100 0",
      "easing": "ease-in-out",
      "dur": "11000"
    });
    element.appendChild(dropAnim);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
})();
