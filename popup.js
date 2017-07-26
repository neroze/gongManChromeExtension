var gong = [];
gong.push('http://www.wavlist.com/soundfx/026/cymbal3.wav');
gong.push('http://www.wavlist.com/soundfx/026/gong2.wav');
gong.push('http://www.wavlist.com/soundfx/026/gong1.wav');
gong.push('https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/gongs%20and%20super%20crashes/276[kb]big-boomy-gong.wav.mp3');
gong.push('https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/gongs%20and%20super%20crashes/861[kb]Kringarie-gong.wav.mp3');

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById("jumper-ext-button");

  button.addEventListener('click', function(){
    var gongID = document.querySelector('.gong:checked').value;
    // alert(gongID+" , " + gong[gongID] )
    var audio = new Audio(gong[gongID]);
    audio.play()
    button.className = 'animated tada'

    setTimeout(function(){
    	button.className = ''
    }, 1000)
  })
});


function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}
