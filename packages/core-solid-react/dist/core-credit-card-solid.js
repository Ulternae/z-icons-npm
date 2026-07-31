import React from 'react';

export function CoreCreditCardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96v64h512V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m0 128v192c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V224z"})
  );
}

export default CoreCreditCardSolid;
