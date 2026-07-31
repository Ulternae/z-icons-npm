import React from 'react';

export const LanTrowelBricksRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 66.1v123.8L71.2 128zm-12.3-48.5-128.6 76C8.9 109 8.9 147 35.1 162.4l128.5 76c26.7 15.8 60.3-3.5 60.3-34.4v-52h264c13.3 0 24-10.7 24-24s-10.7-24-24-24h-264V52c0-31-33.7-50.2-60.3-34.4zM288 384h176v80H256v-80zm-80 0v80H48v-80zm256-48H336v-80h128zm-176-80v80H48c-26.5 0-48 21.5-48 48v80c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-80c0-1.3-.1-2.7-.2-4 .1-1.3.2-2.7.2-4V256c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48"})
);

export default LanTrowelBricksRegular;
