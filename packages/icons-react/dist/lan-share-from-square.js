import React from 'react';

export const LanShareFromSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 112V38.6L537.4 160 416 281.4V208c0-8.8-7.2-16-16-16h-62.5C274.8 192 224 242.8 224 305.5c0 4.6.3 9.3.8 13.9-17.9-18.5-32.8-44.1-32.8-79.3 0-61.9 50.1-112 112-112h96c8.8 0 16-7.2 16-16zM411.3 0C396.2 0 384 12.2 384 27.3V96h-80c-79.5 0-144 64.5-144 144 0 93.4 82.8 134.8 100.6 142.6.9.4 1.9.7 2.8.9h.1c7.2 1.7 14.6-1.9 17.9-8.5s1.6-14.7-4.1-19.4c-14.7-12.2-21.4-30-21.4-50.2 0-45 36.5-81.5 81.5-81.5h46.5v68.7c0 15.1 12.2 27.3 27.3 27.3 7.2 0 14.2-2.9 19.3-8l140.8-140.6c6.2-6.2 6.2-16.4 0-22.6L430.6 8c-5.1-5.1-12.1-8-19.3-8M112 96c-44.2 0-80 35.8-80 80v256c0 44.2 35.8 80 80 80h256c44.2 0 80-35.8 80-80v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanShareFromSquare;
