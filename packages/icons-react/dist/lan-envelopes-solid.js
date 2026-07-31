import React from 'react';

export const LanEnvelopesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M313.6 235.9c13.5 9.2 31.3 9.2 44.8 0l217.2-147C572.1 56.9 545 32 512 32H160c-33 0-60.1 24.9-63.6 56.9zm71.7 39.8a87.79 87.79 0 0 1-98.6 0L96 146.6V320c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V146.6l-190.7 129zM48 152c0-13.3-10.7-24-24-24S0 138.7 0 152v264c0 35.3 28.7 64 64 64h392c13.3 0 24-10.7 24-24s-10.7-24-24-24H64c-8.8 0-16-7.2-16-16z"})
);

export default LanEnvelopesSolid;
