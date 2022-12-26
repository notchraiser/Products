import React, { useState } from "react";
import usePrevious from "hooks/usePrevious";

const GetPreviousValue = () => {
  const [count, setCount] = useState(0);
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);

  return (
    <div className="flex-row flex-end">
      useRef example -
      <h4>
        Now: {count}, before: {prevCount}
      </h4>
      <button
        type="button"
        name="save"
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default GetPreviousValue;
