import { useEffect, useRef } from "react";

const VideoPlayer: React.FC<{ stream: MediaStream }> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
    console.log(stream);
  }, [stream]);

  return <video ref={videoRef} autoPlay muted />;
};

export default VideoPlayer;
