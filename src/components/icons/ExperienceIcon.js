import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ExperienceIcon(props) {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="experience-tooltip">Experience</Tooltip>}
    >
      <div className="icon" onClick={() => props.iconClick("experience")}>
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
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
        </svg>
      </div>
    </OverlayTrigger>
  );
}

export default ExperienceIcon;
