import React from "react";
function YoutubeEmbed() {
  return (
    <div
      id="headerPopup"
      className="mfp embed-responsive embed-responsive-21by9"
    >
      <iframe
        className="embed-responsive-item"
        width="854"
        height="480"
        src="https://www.youtube.com/embed/6w58J6Zr6DM"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default YoutubeEmbed;

{
  /* <iframe width="727" height="409" src="https://www.youtube.com/embed/6w58J6Zr6DM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
