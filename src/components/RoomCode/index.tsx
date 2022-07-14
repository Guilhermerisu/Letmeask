import copyImg from "../../assets/images/copy.svg";

import "../RoomCode/styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  const copyCode = () => {
    navigator.clipboard.writeText(props.code);
  };
  return (
    <button className="room-code" onClick={copyCode}>
      <div>
        <img src={copyImg} alt="Copiar código" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  );
}
