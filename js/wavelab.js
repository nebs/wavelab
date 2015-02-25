var waves = new Array();

var addWave = function(wave, container) {
    waves.push(wave);
    new WaveView(container, wave).refresh();
}

window.onload = function() {
  var waveFactory = new WaveFactory();
  var container = document.getElementById("wavepool");

  document.getElementById("add-empty").addEventListener("click", function(e) {
    addWave(waveFactory.emptyWave(), container);
  });

  document.getElementById("add-sine").addEventListener("click", function(e) {
    addWave(waveFactory.sineWave(), container);
  });

  document.getElementById("add-square").addEventListener("click", function(e) {
    addWave(waveFactory.sawWave(), container);
  });

  document.getElementById("add-triangle").addEventListener("click", function(e) {
    addWave(waveFactory.triangleWave(), container);
  });

  document.getElementById("add-saw").addEventListener("click", function(e) {
    addWave(waveFactory.sawWave(), container);
  });

  document.getElementById("add-white-noise").addEventListener("click", function(e) {
    addWave(waveFactory.whiteNoiseWave(), container);
  });

  document.getElementById("add-custom-1").addEventListener("click", function(e) {
    addWave(waveFactory.custom1Wave(), container);
  });

  document.getElementById("add-custom-2").addEventListener("click", function(e) {
    addWave(waveFactory.custom2Wave(), container);
  });

  document.getElementById("export").addEventListener("click", function(e) {
    var newWindow = window.open();
    newWindow.document.write("<html><head><title>WaveLab - Export</title></head><body></body></html>");
    var dataContainer = document.createElement("pre");
    newWindow.document.body.appendChild(dataContainer);
    for (var i in waves) {
      var wave = waves[i];
      dataContainer.innerHTML += "{ // " + wave.title + "\n";
      dataContainer.innerHTML += wave.print(16);
      dataContainer.innerHTML += "\n},\n";
    }
  });
}

