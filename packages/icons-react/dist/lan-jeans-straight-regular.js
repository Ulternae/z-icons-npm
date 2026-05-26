import React from 'react';

export const LanJeansStraightRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M49.5 48h345.8l-2 32H51.5zm5 80h73.4c-3.9 27.1-27.2 48-55.4 48h-15zm21 336-15-240h12c54.7 0 99.6-42.3 103.7-96h24.3v336zm173-336h24.3c4.1 53.7 49 96 103.7 96h7.8l-15 240H248.5zm72.6 0h69.3l-3 48h-10.8c-28.2 0-51.6-20.9-55.4-48zM395.3 0H49.5C21.8 0-.1 23.4 1.6 51l26 416c1.6 25.3 22.6 45 47.9 45h293.8c25.3 0 46.3-19.7 47.9-45l26-416c1.7-27.6-20.2-51-47.9-51"})
);

export default LanJeansStraightRegular;
