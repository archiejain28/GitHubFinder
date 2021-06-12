import React from "react";

function Alert({ Alert }) {
  return (
    Alert !== null && (
      <div className="alert alert-light">
        <i class="fa fa-exclamation-circle" aria-hidden="true" />
        {Alert}
      </div>
    )
  );
}

export default Alert;
