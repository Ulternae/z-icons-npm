import React from 'react';

export function MinaQuestionCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M12 13.496c0-2.003 2-1.503 2-3.506 0-2.659-4-2.659-4 0m2 6.007v-.5"})
  );
}

export default MinaQuestionCircle;
