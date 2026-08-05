import React from 'react';

export function LanChevronDoubleRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m37.7 477.7 216-216c3.1-3.1 3.1-8.2 0-11.3l-216-216c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L236.7 256 26.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm192 0 216-216c3.1-3.1 3.1-8.2 0-11.3l-216-216c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L428.7 256 218.3 466.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
  );
}

export default LanChevronDoubleRightThin;
