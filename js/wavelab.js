window.onload = function() {
  var waveFactory = new WaveFactory();

  new WaveView(document.body, waveFactory.sineWave()).refresh();
  new WaveView(document.body, waveFactory.sawWave()).refresh();
  new WaveView(document.body, waveFactory.triangleWave()).refresh();
  new WaveView(document.body, waveFactory.squareWave()).refresh();
  new WaveView(document.body, waveFactory.whiteNoiseWave()).refresh();
  new WaveView(document.body, waveFactory.custom1Wave()).refresh();
  new WaveView(document.body, waveFactory.custom2Wave()).refresh();
}
