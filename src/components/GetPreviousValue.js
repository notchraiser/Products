import React, { useState } from 'react';
import usePrevious from 'hooks/usePrevious';

const GetPreviousValue = () => {
    const [count, setCount] = useState(0);
  // Get the previous value (was passed into hook on last render)
  const prevCount = usePrevious(count);

  return (
    <div>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default GetPreviousValue