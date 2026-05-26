import React from 'react';

export const LanSoap = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-46.9 128H96c-53 0-96 43-96 96v128c0 53 43 96 96 96h320c53 0 96-43 96-96V256c0-48-35.3-87.8-81.3-94.9-1.7 11-5 21.4-9.6 31.1 33 2.6 58.9 30.2 58.9 63.8v128c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h122.8c-4.7-9.9-8-20.7-9.6-32zM400 320c0 26.5-21.5 48-48 48H160c-26.5 0-48-21.5-48-48s21.5-48 48-48h192c26.5 0 48 21.5 48 48m-240-80c-44.2 0-80 35.8-80 80s35.8 80 80 80h192c44.2 0 80-35.8 80-80s-35.8-80-80-80zM400 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96m-112 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0"})
);

export default LanSoap;
