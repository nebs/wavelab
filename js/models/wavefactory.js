function WaveFactory() {
  this.sineWave = function() {
    var wave = new Wave("Sine");
    wave.fill(function(x) {
      return 128 + Math.floor(127 * Math.sin(x/128 * Math.PI));
    });
    return wave;
  }

  this.squareWave = function() {
    var wave = new Wave("Square");
    wave.fill(function(x) {
      if (x < 128) {
        return 255;
      } else {
        return 0;
      }
    });
    return wave;
  }

  this.sawWave = function() {
    var wave = new Wave("Saw");
    wave.fill(function(x) {
      if (x < 128) {
        return 127 + x;
      } else {
        return -127 + x;
      }
    });
    return wave;
  }

  this.triangleWave = function() {
    var wave = new Wave("Triangle");
    wave.fill(function(x) {
      if (x < 64) {
        return 127 + x * 2;
      } else if (x >= 64 && x < 192) {
        return 382 - (x * 2);
      } else {
        return -382 + (x * 2);
      }
    });
    return wave;
  }

  this.whiteNoiseWave = function() {
    var wave = new Wave("White Noise");
    wave.fill(function(x) {
      return Math.floor(Math.random()  * 256.0);
    });
    return wave;
  }

  this.custom1Wave = function() {
    var wave = new Wave("Custom 1");
    wave.fill(function(x) {
      var val = Math.floor(127 * Math.sin(x/128 * Math.PI));
      val += Math.floor((127/4)  * Math.sin(3 * x/128 * Math.PI));
      val += Math.floor((127/8)  * Math.sin(5 * x/128 * Math.PI));
      val += Math.floor((127/16) * Math.sin(7 * x/128 * Math.PI));
      val += Math.floor((127/32) * Math.sin(9 * x/128 * Math.PI));
      val += 128;
      return val;
    });
    return wave;
  }

  this.custom2Wave = function() {
    var wave = new Wave("Custom 2");
    wave.fill(function(x) {
      var sinx = Math.sin(x/128 * Math.PI);
      var sin3x = Math.sin(3*x/128 * Math.PI);
      var val = ((3 * sinx) - sin3x) / 4;
      val *= 127;
      val += 128;
      return val;
    });
    return wave;
  }
}
