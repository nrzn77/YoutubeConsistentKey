document.addEventListener('keydown', (e) => {
    const video = document.querySelector('video');
  
    if (!video) return; // video is running
  
    switch (e.code) {
      case 'ArrowUp':
        e.preventDefault();
        video.volume = Math.min(video.volume + 0.05, 1); // Increase volume by 5%
        break;
  
      case 'ArrowDown':
        e.preventDefault();
        video.volume = Math.max(video.volume - 0.05, 0); // Decrease volume by 5%
        break;
  
      case 'ArrowRight':
        e.preventDefault();
        video.currentTime += 5; // Seek forward 5 seconds
        break;
  
      case 'ArrowLeft':
        e.preventDefault();
        video.currentTime -= 5; // Seek backward 5 seconds
        break;
        
      case 'KeyP': //press 'P' to toggle Picture-in-Picture
        e.preventDefault();
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          video.requestPictureInPicture();
        }
        break;
      
      
  
      default:
        break;
    }
  });
  