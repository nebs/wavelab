var renderWave = function(waveFunc, title, userData) {
  var wavetableDiv = document.createElement("div");
  wavetableDiv.className = "wavetable";
  var nameSpan = document.createElement("span");
  nameSpan.className = "name";
  var textArea = document.createElement("textarea");
  var canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  wavetableDiv.appendChild(nameSpan);
  wavetableDiv.appendChild(textArea);
  wavetableDiv.appendChild(canvas);
  document.body.appendChild(wavetableDiv);
  var ctx = canvas.getContext("2d");
  nameSpan.innerHTML = title;
  ctx.beginPath();
  ctx.strokeStyle = '#0000ff';
  var col = 0;
  for (var i=0; i<256; i++) {
    var val = Math.floor(waveFunc(i, userData));
    if (val > 255) val = 255;
    if (val < 0) val = 0;
    if (val < 100) {
      textArea.innerHTML += ' ';
    }
    if (val < 10) {
      textArea.innerHTML += ' ';
    }
    textArea.innerHTML += val;
    if (i < 255) {
      textArea.innerHTML += ',';
    }
    col++;
    if (col == 16) {
      col = 0;
      if (i < 255) {
       textArea.innerHTML += '\n';
      }
    }
    if (i == 0) {
      ctx.moveTo(0, 256-val);
    } else {
      ctx.lineTo(i, 256-val);
    }
  }
  ctx.stroke();
}

var customFunc1 = function(i, userData) {
  var val = Math.floor(127 * Math.sin(i/128 * Math.PI));
  val += Math.floor((127/4)  * Math.sin(3 * i/128 * Math.PI));
  val += Math.floor((127/8)  * Math.sin(5 * i/128 * Math.PI));
  val += Math.floor((127/16) * Math.sin(7 * i/128 * Math.PI));
  val += Math.floor((127/32) * Math.sin(9 * i/128 * Math.PI));
  val += 128;
  return val;
}

var customFunc2 = function(i, userData) {
  var sinx = Math.sin(i/128 * Math.PI);
  var sin3x = Math.sin(3*i/128 * Math.PI);
  var val = ((3 * sinx) - sin3x) / 4;
  val *= 127;
  val += 128;
  return val;
}

var customFunc3 = function(i, userData) {
  var v1 = sawFunc(i);
  var v2 = sineFunc(i);

  if (v1 > v2) {
    return (v2 + userData.index*(v1-v2)/userData.total);
  } else {
    return (v2 - userData.index*(v2-v1)/userData.total);
  }
}

var sineFunc = function(i, userData) {
  return 128 + Math.floor(127 * Math.sin(i/128 * Math.PI));
}

var triangleFunc = function(i, userData) {
  if (i < 64) {
    return 127 + i * 2;
  } else if (i >= 64 && i < 192) {
    return 382 - (i * 2);
  } else {
    return -382 + (i * 2);
  }
}

var sawFunc = function(i, userData) {
  if (i < 128) {
    return 127 + i;
  } else {
    return -127 + i;
  }
}

var squareFunc = function(i, userData) {
  if (i < 128) {
    return 255;
  } else {
    return 0;
  }
}

var whiteNoiseFunc = function(i, userData) {
  return Math.floor(Math.random()  * 256.0);
}

window.onload = function() {
  renderWave(sineFunc, "Sine", 0);
  renderWave(triangleFunc, "Triangle", 0);
  renderWave(squareFunc, "Square", 0);
  renderWave(sawFunc, "Sawtooth", 0);
  renderWave(whiteNoiseFunc, "White Noise", 0);
  renderWave(customFunc1, "Custom 1", 0);
  renderWave(customFunc2, "Custom 2", 0);

  var frames = 5;
  for (var i=0; i<=frames; i++) {
    renderWave(customFunc3, "Custom 3."+i, {"index":i,"total":frames});
  }
}
