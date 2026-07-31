import React from 'react';

export const LanUTurnDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 527.931',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 384c0 9.7-4.4 16.7-8.3 21.5l-1 1.1-112 112c-20.2 20.1-54.7 5.5-54.7-22.6v-48H208C93.1 448 0 354.9 0 240S93.1 32 208 32h208l3.3.2C435.4 33.8 448 47.4 448 64v64l-.2 3.3c-1.6 16.1-15.2 28.7-31.8 28.7H208c-44.2 0-80 35.8-80 80s35.8 80 80 80h128v-48c0-28.1 34.5-42.7 54.6-22.6l112 112 1 1.1c3.9 4.8 8.3 11.8 8.3 21.5zm-32.8-.8L368 272v64c0 8.8-7.2 16-16 16H208c-61.9 0-112-50.1-112-112s50.2-112 112-112h208V64H208c-97.2 0-176 78.8-176 176s78.8 176 176 176h144c8.8 0 16 7.2 16 16v64l111.2-111.2c.3-.3.4-.6.6-.8-.1-.2-.3-.5-.6-.8"})
);

export default LanUTurnDownRight;
