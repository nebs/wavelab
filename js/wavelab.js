window.onload = function() {
  var waveFactory = new WaveFactory();
  var container = document.getElementById("wavepool");

  document.getElementById("add-sine").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.sineWave()).refresh();
  });

  document.getElementById("add-square").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.squareWave()).refresh();
  });

  document.getElementById("add-triangle").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.triangleWave()).refresh();
  });

  document.getElementById("add-saw").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.sawWave()).refresh();
  });

  document.getElementById("add-white-noise").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.whiteNoiseWave()).refresh();
  });

  document.getElementById("add-custom-1").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.custom1Wave()).refresh();
  });

  document.getElementById("add-custom-2").addEventListener("click", function(e) {
    new WaveView(container, waveFactory.custom2Wave()).refresh();
  });
}

