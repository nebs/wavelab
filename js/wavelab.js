var waves = new Array();

var addWave = function(wave, container) {
    waves.push(wave);
    new WaveView(container, wave).refresh();
}

window.onload = function() {
  var waveFactory = new WaveFactory();
  var container = document.getElementById("wavepool");

  document.getElementById("add-custom").addEventListener("click", function(e) {
    addWave(waveFactory.customWave(), container);
  });

  document.getElementById("add-sine").addEventListener("click", function(e) {
    addWave(waveFactory.sineWave(), container);
  });

  document.getElementById("add-square").addEventListener("click", function(e) {
    addWave(waveFactory.squareWave(), container);
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

  document.getElementById("add-pseudo-square").addEventListener("click", function(e) {
    addWave(waveFactory.pseudoSquareWave(), container);
  });

  document.getElementById("add-pseudo-triangle").addEventListener("click", function(e) {
    addWave(waveFactory.pseudoTriangleWave(), container);
  });

  document.getElementById("add-pseudo-saw").addEventListener("click", function(e) {
    addWave(waveFactory.pseudoSawWave(), container);
  });

  document.getElementById("add-fast-exp-rise").addEventListener("click", function(e) {
    addWave(waveFactory.fastExpRiseWave(), container);
  });

  document.getElementById("add-fast-exp-fall").addEventListener("click", function(e) {
    addWave(waveFactory.fastExpFallWave(), container);
  });

  document.getElementById("add-slow-exp-rise").addEventListener("click", function(e) {
    addWave(waveFactory.slowExpRiseWave(), container);
  });

  document.getElementById("add-slow-exp-fall").addEventListener("click", function(e) {
    addWave(waveFactory.slowExpFallWave(), container);
  });

  document.getElementById("export").addEventListener("click", function(e) {
    var newWindow = window.open();
    newWindow.document.write("<html><head><title>WaveLab - Export</title></head><body></body></html>");
    var dataContainer = document.createElement("pre");
    newWindow.document.body.appendChild(dataContainer);
    dataContainer.innerHTML += "// " + waves.length + " waves\n";
    for (var i in waves) {
      var wave = waves[i];
      dataContainer.innerHTML += "{\n";
      dataContainer.innerHTML += wave.print(16);
      dataContainer.innerHTML += "\n},\n";
    }
  });

  document.getElementById("clear").addEventListener("click", function(e) {
    container.innerHTML = "";
    waves = new Array();
  });
}

