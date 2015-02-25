function WaveFactory() {
  this.customWave = function() {
    var wave = new Wave("Custom");
    wave.clear();
    return wave;
  }

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
}
