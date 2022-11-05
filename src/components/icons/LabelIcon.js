import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function LabelIcon(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="label-tooltip">Label</Tooltip>}
    >
      <div className="icon" onClick={() => props.iconClick("label")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.6em"
          width="1.6em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path>
        </svg>
      </div>
    </OverlayTrigger>
  );
}

export default LabelIcon;
