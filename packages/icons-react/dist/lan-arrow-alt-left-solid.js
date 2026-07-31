import React from 'react';

export const LanArrowAltLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c9.2-9.2 22.9-11.9 34.9-6.9S224 83.1 224 96v96h176c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H224v96c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-160-160z"})
);

export default LanArrowAltLeftSolid;
