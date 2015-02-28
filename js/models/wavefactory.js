function WaveFactory() {
  this.customWave = function() {
    var wave = new Wave();
    wave.clear();
    return wave;
  }

  this.sineWave = function() {
    var offsetY = MAX_SAMPLE_VALUE / 2;
    var maxAmplitude = offsetY - 1;
    var wave = new Wave();
    wave.fill(function(x) {
      return offsetY + maxAmplitude * Math.sin(x/offsetY * Math.PI);
    });
    return wave;
  }

  this.squareWave = function() {
    var maxY = MAX_SAMPLE_VALUE-1;
    var minY = 0;
    var halfX = SAMPLES_PER_WAVE / 2;
    var wave = new Wave();
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
    var wave = new Wave();
    wave.fill(function(x) {
      return MAX_SAMPLE_VALUE - 1 - x;
    });
    return wave;
  }

  this.triangleWave = function() {
    var q1x = SAMPLES_PER_WAVE / 4;
    var q3x = q1x * 3;
    var a1 = (MAX_SAMPLE_VALUE / 2) - 1;
    var a2 = a1 * 3;
    var wave = new Wave();
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
    var wave = new Wave();
    wave.fill(function(x) {
      return Math.random()  * MAX_SAMPLE_VALUE;
    });
    return wave;
  }

  this.pseudoSquareWave = function() {
    var wave = new Wave();
    wave.fill(function(x) {
      var A = 128;
      var output = 128;
      for (var i=0; i<10; i++) {
        var factor = (i * 2) + 1;
        output += A/factor * Math.sin((x*factor)/128 * Math.PI);
      }
      return output;
    });
    return wave;
  }

  this.pseudoTriangleWave = function() {
    var wave = new Wave();
    wave.fill(function(x) {
      var A = 105;
      var output = 128;
      for (var i=0; i<4; i++) {
        var factor = (i * 2) + 1;
        var scaler = (factor * factor);
        scaler *= i % 2 == 0 ? 1 : -1;
        output += A/scaler * Math.sin((x*factor)/128 * Math.PI);
      }
      return output;
    });
    return wave;
  }

  this.pseudoSawWave = function() {
    var wave = new Wave();
    wave.fill(function(x) {
      var A = 70;
      var output = 128;
      for (var i=0; i<8; i++) {
        var factor = i + 1;
        output += A/factor * Math.sin((x*factor)/128 * Math.PI);
      }
      return output;
    });
    return wave;
  }
}
