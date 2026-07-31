import React from 'react';

export const LanMarkerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M408.8 48c-14.6 0-28.7 5.8-39 16.2L217.9 216l78.1 78.1 151.8-151.9c10.4-10.4 16.2-24.4 16.2-39 0-30.5-24.7-55.2-55.2-55.2M136.3 297.7c-42.9 42.9-71.6 98.1-82.2 157.9l-.5 2.9 2.9-.5c59.8-10.6 114.9-39.2 157.9-82.2l47.7-47.7L184 250zM335.8 30.2C355.2 10.8 381.4 0 408.8 0 465.8 0 512 46.2 512 103.2c0 27.4-10.9 53.6-30.2 73L248.3 409.7c-49.9 49.9-114 83.3-183.5 95.5l-36.7 6.5C20.5 513 12.6 510.5 7 505s-8-13.4-6.7-21.1l6.5-36.7c12.3-69.5 45.6-133.6 95.5-183.5L284.1 81.9l-13.1-13c-9.4-9.4-24.6-9.4-33.9 0L137 169c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l100-100.2c28.1-28.1 73.7-28.1 101.8 0L318.1 48z"})
);

export default LanMarkerRegular;
