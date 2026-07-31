import React from 'react';

export const LanShuttlecockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -24.1 576 536.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M276.2-24c14.2 0 27.8 5.7 37.8 15.7l66.2 66.2 52 10.4c22.2 4.4 39.5 21.8 43.9 43.9l10.4 51.9 66.3 66.2 3.5 3.9c7.8 9.5 12.1 21.5 12.1 33.9 0 21.7-13.1 41.2-33.1 49.5l-211.2 86.9-76.6 68.6c-47.8 42.7-119.9 42.1-166.9-.6l-4.5-4.2c-46.8-46.8-48.9-122-4.8-171.4l68.5-76.6L226.7 9.1l1.7-3.7c9-18 27.5-29.5 47.8-29.5zM105.5 330.9c-25.4 30.4-23.6 75.3 4.6 103.5l5.6 5.1c28.3 23.2 69.4 23.3 97.9-.5zm31.9-35.9 112 112 27.6-24.6-115-114.9zm166.2 46.2 14.1 14.1 199.3-82c2.1-.9 3.4-2.9 3.4-5.1 0-.7-.1-1.4-.4-2.1l-1.2-1.8-55.9-55.9zm-66.3-66.3 32.3 32.3 168.5-140.5-9-45.1c-.6-3.2-3.1-5.6-6.3-6.3l-45.1-9zM276.2 24c-1.7 0-3.2.8-4.2 2l-.8 1.4-82.1 199.3 14.1 14.1L336 81.5l-55.8-55.8c-1-1-2.4-1.6-3.9-1.6z"})
);

export default LanShuttlecockRegular;
