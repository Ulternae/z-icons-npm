import React from 'react';

export const LanCapsulesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 112c0-53 43-96 96-96s96 43 96 96v128H48zm0 288V256h192v144c0 53-43 96-96 96s-96-43-96-96M32 112v288c0 61.9 50.1 112 112 112s112-50.1 112-112V294.2l116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3C391.8 93.6 322 81 271.3 117.2c-5.6 4-10.7 8.4-15.3 13.1V112C256 50.1 205.9 0 144 0S32 50.1 32 112m224 43.7c6.4-9.7 14.6-18.4 24.6-25.5 43.3-30.9 103-20.3 133.5 24.1l62.2 90.6-158.5 111-60.7-88.6c-.3-.5-.7-1-1-1.4V155.7zm70.8 213.4 158.5-111 57.3 83.5c30.6 44.6 19.9 106.1-23.6 137.2-43.3 30.9-103 20.3-133.5-24.1z"})
);

export default LanCapsulesThin;
