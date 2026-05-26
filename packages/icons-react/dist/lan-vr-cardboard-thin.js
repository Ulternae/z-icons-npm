import React from 'react';

export const LanVrCardboardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 112h448c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48H394.5c-12.7 0-24.9-5.1-33.9-14.1l-34-33.9c-10.2-10.2-24.1-16-38.6-16s-28.4 5.8-38.6 16l-33.9 33.9c-9 9-21.2 14.1-33.9 14.1H64c-26.5 0-48-21.5-48-48V160c0-26.5 21.5-48 48-48m448-16H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h117.5c17 0 33.3-6.7 45.3-18.7l33.9-33.9c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3l33.9 33.9c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64m-352 96a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128m256-112a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128"})
);

export default LanVrCardboardThin;
