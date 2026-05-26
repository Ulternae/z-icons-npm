import React from 'react';

export const LanTapeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352m138.6 352c52-41 85.4-104.6 85.4-176 0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224h296c13.3 0 24-10.7 24-24s-10.7-24-24-24zM256 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 144a96 96 0 1 0 0-192 96 96 0 1 0 0 192"})
);

export default LanTapeRegular;
