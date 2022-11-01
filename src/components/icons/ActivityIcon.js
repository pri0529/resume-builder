import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ActivityIcon(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="activity-tooltip">Activity</Tooltip>}
    >
      <div className="icon" onClick={() => props.iconClick("activity")}>
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
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
        </svg>
      </div>
    </OverlayTrigger>
  );
}

export default ActivityIcon;
