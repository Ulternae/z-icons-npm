import React from 'react';

export const LanComputerSpeaker = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M240 352v32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h188.8c-5.6 9.7-9.6 20.5-11.5 32H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32zm1.3 96c1.9 11.5 5.9 22.3 11.5 32H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zM336 64c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zm120 72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m56 184a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanComputerSpeaker;
