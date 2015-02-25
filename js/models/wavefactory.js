function WaveFactory() {
  this.sineWave = function() {
    var offsetY = MAX_SAMPLE_VALUE / 2;
    var maxAmplitude = offsetY - 1;
    var wave = new Wave("Sine");
    wave.fill(function(x) {
      return offsetY + Math.floor(maxAmplitude * Math.sin(x/offsetY * Math.PI));
    });
    return wave;
  }

  this.squareWave = function() {
    var maxY = MAX_SAMPLE_VALUE-1;
    var minY = 0;
    var halfX = SAMPLES_PER_WAVE / 2;
    var wave = new Wave("Square");
    wave.fill(function(x) {
      if (x < halfX) {
        return maxY;
      } else {
        return minY;
      }
    });
    return wave;
  }

  this.sawWave = function() {
    var halfY = (MAX_SAMPLE_VALUE / 2) - 1;
    var halfX = SAMPLES_PER_WAVE / 2;
    var wave = new Wave("Saw");
    wave.fill(function(x) {
      if (x < halfX) {
        return halfY + x;
      } else {
        return -halfY + x;
      }
    });
    return wave;
  }

  this.triangleWave = function() {
    var q1x = SAMPLES_PER_WAVE / 4;
    var q3x = q1x * 3;
    var a1 = (MAX_SAMPLE_VALUE / 2) - 1;
    var a2 = a1 * 3;
    var wave = new Wave("Triangle");
    wave.fill(function(x) {
      if (x < q1x) {
        return a1 + (x * 2);
      } else if (x >= q1x && x < q3x) {
        return a2 - (x * 2);
      } else {
        return -a2 + (x * 2);
      }
    });
    return wave;
  }

  this.whiteNoiseWave = function() {
    var wave = new Wave("White Noise");
    wave.fill(function(x) {
      return Math.floor(Math.random()  * MAX_SAMPLE_VALUE);
    });
    return wave;
  }

  this.custom1Wave = function() {
    var offsetY1 = (MAX_SAMPLE_VALUE / 2) - 1;
    var offsetY2 = offsetY1 / 4;
    var offsetY3 = offsetY1 / 8;
    var offsetY4 = offsetY1 / 16;
    var offsetY5 = offsetY1 / 32;
    var halfY = MAX_SAMPLE_VALUE / 2;
    var wave = new Wave("Custom 1");
    wave.fill(function(x) {
      var val = Math.floor(offsetY1 * Math.sin(x/128 * Math.PI));
      val += Math.floor(offsetY2 * Math.sin(3 * x/halfY * Math.PI));
      val += Math.floor(offsetY3 * Math.sin(5 * x/halfY * Math.PI));
      val += Math.floor(offsetY4 * Math.sin(7 * x/halfY * Math.PI));
      val += Math.floor(offsetY5 * Math.sin(9 * x/halfY * Math.PI));
      val += halfY;
      return val;
    });
    return wave;
  }

  this.custom2Wave = function() {
    var halfY = MAX_SAMPLE_VALUE / 2;
    var amplitude = halfY - 1;
    var wave = new Wave("Custom 2");
    wave.fill(function(x) {
      var sinx = Math.sin(x/halfY * Math.PI);
      var sin3x = Math.sin(3*x/halfY * Math.PI);
      var val = ((3 * sinx) - sin3x) / 4;
      val *= amplitude;
      val += halfY;
      return val;
    });
    return wave;
  }
}
