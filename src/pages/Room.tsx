import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";

const Room = () => {
  const { id } = useParams();
  const { ws } = useContext(RoomContext);

  useEffect(() => {
    ws.emit("join-room", { roomId: id });
  }, [id]);
  return <div>Room id ${id}</div>;
};

export default Room;
