/* canvas */
const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

video.addEventListener('play', start);

function start() {
  // Set the canvas size to match the video dimensions
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  paintFrame();
}

function paintFrame() {
  requestAnimationFrame(paintFrame);
  // Every frame, paint the current video frame to the canvas
  ctx.drawImage(video,0,0);
  ctx.filter = "brightness(75%)";
}
