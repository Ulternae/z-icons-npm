import React from 'react';

export const LanH3Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 88c0-13.3-10.7-24-24-24S32 74.7 32 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V280h128v144c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.3-10.7-24-24-24s-24 10.7-24 24v144H80zm272 168c0 13.3 10.7 24 24 24h68c33.1 0 60 26.9 60 60s-26.9 60-60 60H344c-13.3 0-24 10.7-24 24s10.7 24 24 24h100c59.6 0 108-48.4 108-108 0-33.9-15.6-64.2-40.1-84 24.5-19.8 40.1-50.1 40.1-84 0-59.6-48.4-108-108-108H344c-13.3 0-24 10.7-24 24s10.7 24 24 24h100c33.1 0 60 26.9 60 60s-26.9 60-60 60h-68c-13.3 0-24 10.7-24 24"})
);

export default LanH3Regular;
