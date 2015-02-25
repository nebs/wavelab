function WaveView(container, wave) {
  this.container = container;
  this.wave = wave;
  this.wavetableContainer = null;
  this.ctx = null;
  this.canvas = null;
  this.isDragging = false;
  this.nameSpan = null;

  this.refresh = function() {
    if (!this.wavetableContainer) {
      this.wavetableContainer = document.createElement("div");
      this.wavetableContainer.className = "wavetable";
      this.container.appendChild(this.wavetableContainer);
      this.wavetableContainer.style.width = SAMPLES_PER_WAVE + "px";
      this.wavetableContainer.innerHTML = "";

      this.nameSpan = document.createElement("span");
      this.wavetableContainer.appendChild(this.nameSpan);
      this.nameSpan.className = "name";

      this.canvas = document.createElement("canvas");
      this.wavetableContainer.appendChild(this.canvas);
      this.canvas.width = SAMPLES_PER_WAVE;
      this.canvas.height = MAX_SAMPLE_VALUE;

      var thisWaveView = this;
      var prevX = 0;
      var prevY = 0;
      this.canvas.addEventListener("mousedown", function(e) {
        prevX = e.clientX - thisWaveView.canvas.offsetLeft;
        prevY = e.clientY - thisWaveView.canvas.offsetTop;
        thisWaveView.isDragging = true;
      }, false);
      this.container.addEventListener("mouseup", function(e) {
        thisWaveView.isDragging = false;
      }, false);
      this.canvas.addEventListener("mousemove", function(e) {
        if (!thisWaveView.isDragging) { return; }
        currX = e.clientX - thisWaveView.canvas.offsetLeft;
        currY = e.clientY - thisWaveView.canvas.offsetTop;

        var y1 = MAX_SAMPLE_VALUE - prevY;
        var y2 = MAX_SAMPLE_VALUE - currY;
        var dX = Math.abs(prevX - currX);
        var dY = Math.abs(y1 - y2);
        if (dX > 1) {
          for (var i=0; i<dX; i++) {
            var factor = i / dX;
            var y = y2 < y1 ? (y2 + dY*factor) : (y2 - dY*factor);
            var x = currX > prevX ? currX - i : currX + i;
            thisWaveView.wave.setSampleAtIndex(y, x);
          }
        }
        thisWaveView.wave.setSampleAtIndex(MAX_SAMPLE_VALUE - currY, currX);
        thisWaveView.refresh();
        prevX = currX;
        prevY = currY;
      }, false);

      this.ctx = this.canvas.getContext("2d");
    }

    this.nameSpan.innerHTML = this.wave.title;
    this.plotGraph();
  }

  this.plotGraph = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#0000ff';
    for (var i=0; i<this.wave.samples.length; i++) {
      var val = MAX_SAMPLE_VALUE - this.wave.samples[i];
      i == 0 ? this.ctx.moveTo(i, val) : this.ctx.lineTo(i, val);
    }
    this.ctx.stroke();
  }
}
