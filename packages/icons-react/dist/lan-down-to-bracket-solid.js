import React from 'react';

export const LanDownToBracketSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M207 345c9.4 9.4 24.6 9.4 33.9 0L385 201c6.9-6.9 8.9-17.2 5.2-26.2S377.7 160 368 160h-80V48c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v112H80c-9.7 0-18.5 5.8-22.2 14.8S56.2 194.1 63 201zm-143 7c0-17.7-14.3-32-32-32S0 334.3 0 352v64c0 53 43 96 96 96h256c53 0 96-43 96-96v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"})
);

export default LanDownToBracketSolid;
