import { isDisabled } from "@testing-library/user-event/dist/utils";
import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} disabled={isDisabled} type={type}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
