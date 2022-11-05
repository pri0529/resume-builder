import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function SettingIcon(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="setting-tooltip">Settings</Tooltip>}
    >
      <div className="icon" onClick={() => props.iconClick("setting")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1.6em"
          width="1.6em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" clipRule="evenodd"></path>
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path>
        </svg>
      </div>
    </OverlayTrigger>
  );
}

export default SettingIcon;
