;(function() {
  "use strict";

  require("BaseController").init({
    siteName: "Spreaker",
    playPause: "#pl_play_button",
    playNext: "#pl_next_button",
    playPrev: "#pl_prev_button",
    mute: "#pl_volume_button",
    playState: "#pl_wrapper.pl_playing",
    song: "#pl_title_link"
  });
})();
