import React from 'react';

export function LanCapsulesRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 112c0-35.3 28.7-64 64-64s64 28.7 64 64v112H80zm0 288V274.7h128V400c0 35.3-28.7 64-64 64s-64-28.7-64-64M32 112v288c0 61.9 50.1 112 112 112s112-50.1 112-112V294.2l116.3 169.5c35.5 51.7 105.3 64.3 156 28.1s63-107.5 27.5-159.2L427.3 145.3C391.8 93.6 322 81 271.3 117.2c-5.6 4-10.7 8.4-15.3 13.1V112C256 50.1 205.9 0 144 0S32 50.1 32 112m251.4 137.3c-20.9-30.4-13.3-72.2 15.8-93 28.5-20.4 68-13.7 88.5 16.2l53.3 77.7-106.1 74.3-51.5-75.1zm128.5 187.3L362.1 364l106.1-74.3 48 70c20.9 30.4 13.3 72.2-15.8 93-28.5 20.4-68 13.7-88.5-16.2z"})
  );
}

export default LanCapsulesRegular;
