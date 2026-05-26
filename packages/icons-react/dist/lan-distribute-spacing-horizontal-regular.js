import React from 'react';

export const LanDistributeSpacingHorizontalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M424 0c-13.3 0-24 10.7-24 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24M272 368h-96V144h96zm48-224c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48zM48 24C48 10.7 37.3 0 24 0S0 10.7 0 24v464c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanDistributeSpacingHorizontalRegular;
