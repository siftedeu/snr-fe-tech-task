import ReactPlayer from "react-player/lazy";

type VideoPlayerProps = {
  url: string;
  className?: string;
};

const VideoPlayer = ({
  url,
  className = "relative aspect-ratio-16/9",
}: VideoPlayerProps) => {
  return (
    <div className={className}>
      <ReactPlayer
        className="absolute top-0 left-0"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playsinline={true}
      />
    </div>
  );
};

export default VideoPlayer;
