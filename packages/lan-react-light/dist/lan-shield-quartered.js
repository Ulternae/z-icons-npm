import React from 'react';

export function LanShieldQuartered({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M66.8 112.3c-11.3 4.8-18.9 15.5-18.8 27.6.1 20 1.9 43.2 6.3 68.2H240V38.9L66.8 112.4zM61.1 240c21.3 84.6 72.2 180.1 178.9 232.6V240zm210.9 0v232.6c106.7-52.5 157.7-148 179-232.6zm185.8-32c4.3-24.9 6.2-48.2 6.3-68.2.1-12.1-7.5-22.8-18.8-27.6L272 38.8V208zM231.1 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C57.3 420.7 16.6 239.2 16.1 140c-.1-26.2 16.3-47.9 38.3-57.2z"})
  );
}

export default LanShieldQuartered;
