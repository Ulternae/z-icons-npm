import React from 'react';

export const LanEnvelopeOpenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64.4 175.8 256 33.9l191.6 141.9L289.5 293c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11zM256-32c-12.1 0-23.8 3.9-33.5 11L25.9 124.7C9.6 136.8 0 155.8 0 176.1V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176.1c0-20.3-9.6-39.4-25.9-51.4L289.5-21c-9.7-7.2-21.4-11-33.5-11"})
);

export default LanEnvelopeOpenSolid;
