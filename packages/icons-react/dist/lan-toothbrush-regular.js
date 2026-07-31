import React from 'react';

export const LanToothbrushRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 176c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c29.4 0 55.1-11.9 71-36.1 4.3-6.5 7.4-13.2 9.7-19.9 6.4 2.7 12 6 16.6 9.7 9.5 7.7 14.6 17 14.6 30.3 0 26.5-21.5 48-48 48zM0 160c0 35.3 28.7 64 64 64h288c53 0 96-43 96-96 0-58.5-51.6-89.9-104-95.2-8.8-.9-15.8 6.4-16.4 15.2-1.5 25.3-8.4 48-39.6 48H64c-35.3 0-64 28.7-64 64m80 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24H400V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152h-32V280c0-13.3-10.7-24-24-24s-24 10.7-24 24v152H80z"})
);

export default LanToothbrushRegular;
