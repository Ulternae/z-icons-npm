import React from 'react';

export const LanPhoneSquareDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm19.1 279.1-1.4-2.5c-16.6-29.1-14-70.7 18.7-92 75-48.8 172.3-48.8 247.3 0 32.7 21.3 35.3 62.9 18.7 92l-1.4 2.5c-5.1 8.9-15.9 12.6-25.3 8.7L291 299.7c-8.3-3.4-13.3-11.9-12.5-20.8l3-30.3c-37.2-12.5-77.8-11.9-114.6 2l2.8 28.4c.9 8.9-4.2 17.4-12.5 20.8l-48.7 20.1c-9.4 3.9-20.3.2-25.3-8.7z"})
);

export default LanPhoneSquareDownSolid;
