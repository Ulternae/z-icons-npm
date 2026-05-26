import React from 'react';

export const LanCropAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 24c0-13.3-10.7-24-24-24S80 10.7 80 24v56H24C10.7 80 0 90.7 0 104s10.7 24 24 24h56v248c0 30.9 25.1 56 56 56h200v-48H136c-4.4 0-8-3.6-8-8zm256 464c0 13.3 10.7 24 24 24s24-10.7 24-24v-56h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56V136c0-30.9-25.1-56-56-56H176v48h200c4.4 0 8 3.6 8 8z"})
);

export default LanCropAltRegular;
