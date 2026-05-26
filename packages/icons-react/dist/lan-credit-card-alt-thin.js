import React from 'react';

export const LanCreditCardAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v32h480v-32c0-26.5-21.5-48-48-48zm-48 96v64h480v-64zm0 80v128c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V256zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm104 224h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8m96 0h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanCreditCardAltThin;
