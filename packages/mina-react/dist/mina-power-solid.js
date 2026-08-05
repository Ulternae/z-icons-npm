import React from 'react';

export function MinaPowerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"}), React.createElement("path", {"d":"M6.543 5.812a.75.75 0 1 0-.992-1.124A9.73 9.73 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.73 9.73 0 0 0-3.3-7.312.75.75 0 0 0-.993 1.124 8.25 8.25 0 1 1-10.914 0"})
  );
}

export default MinaPowerSolid;
