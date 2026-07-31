import React from 'react';

export const LanUpRightFromSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480.2 32H331.4l148.8 148.7zm8-32c13.3 0 24 10.7 24 24v176c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-76.8-76.7-175.1 175.1c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l175.1-175-76.7-76.7c-6.9-6.9-8.9-17.2-5.2-26.2S302.4 0 312.1 0zM.1 176c0-44.2 35.8-80 80-80h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 44.2-35.8 80-80 80h-256c-44.2 0-80-35.8-80-80z"})
);

export default LanUpRightFromSquare;
