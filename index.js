function showDiv() {
    document.getElementById("hiddenDiv").style.visibility = "visible";
  }

  function ProfileDiv() {
    document.getElementById("profileYoki").style.display="block";
  }

  function ProfileNone() {
    document.getElementById("profileYoki").style.display="none";
  }

// vide play

document.querySelectorAll('.reel-video').forEach(video => {
  video.addEventListener('mouseover', () => {
      video.play();
  });
  video.addEventListener('mouseout', () => {
      video.pause();
  });
});


// document.querySelectorAll('.reel-video1').forEach(video => {
//   video.addEventListener('mouseover', () => {
//       video.muted = false; // Unmute the video
//       video.play();
//   });
//   video.addEventListener('mouseout', () => {
//       video.muted = true; // Mute the video again
//       video.pause();
//   });
// });



// video play visibilty hidden
// document.getElementById("myVideo").addEventListener("click", function() {
//     if (this.paused) {
//       this.play();
//     } else {
//       this.pause();
//     }
//   });

//   function videoPlayFun() {
//     var video = document.getElementById("myVideo");
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }

  // function videoPlayFun(video) {
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  // }