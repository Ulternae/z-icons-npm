import React from 'react';

export const LanUserMessageSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 48v96c0 26.5 21.5 48 48 48h16v41.4c0 14.3 17.2 21.4 27.3 11.3L464 192h64c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48m-48 0c0-9.8 1.5-19.2 4.2-28.1C260.4 12.3 242.7 8 224 8c-66.3 0-120 53.7-120 120s53.7 120 120 120c31.2 0 59.7-11.9 81.1-31.5C284.8 198.9 272 173 272 144zm-77.7 256C95.8 304 16 383.8 16 482.3c0 16.4 13.3 29.7 29.7 29.7h356.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3z"})
);

export default LanUserMessageSolid;
