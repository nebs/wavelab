function Wave(title) {
  this.samples = new Array();
  this.title = title;

  this.clear = function() {
    this.fill(function(x) { return 0; });
  }

  this.fill = function(waveFunc) {
    for (var x=0; x<SAMPLES_PER_WAVE; x++) {
      this.setSampleAtIndex(waveFunc(x), x);
    }
  }

  this.setSampleAtIndex = function(sample, index) {
    if (index  <  0 ||
        index  >= SAMPLES_PER_WAVE) {
      return;
    }

    var cleanSample = Math.floor(sample);
    if (cleanSample > MAX_SAMPLE_VALUE) cleanSample = MAX_SAMPLE_VALUE;
    if (cleanSample < 0) cleanSample = 0;
    this.samples[index] = cleanSample;
  }

  this.print = function(columnCount) {
    columnCount = typeof columnCount !== 'undefined' ? columnCount : SAMPLES_PER_WAVE;
    var output = "";
    var column = 0;
    for (var x=0; x<this.samples.length; x++) {
      var val = this.samples[x];

      if (val < 100) { output += ' '; }
      if (val < 10)  { output += ' '; }
      output += val;
      if (x < this.samples.length-1) { output += ','; }

      column++;
      if (column == columnCount) {
        column = 0;
        if (x < this.samples.length-1) { output += '\n'; }
      }
    }
    return output;
  }
}
