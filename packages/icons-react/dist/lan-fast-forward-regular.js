import React from 'react';

export const LanFastForwardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M272 102.6v306.8L425.4 256zm6.6 368c-9.2 9.2-22.9 11.9-34.9 6.9S224 460.9 224 448V301.3L54.6 470.7c-9.2 9.2-22.9 11.9-34.9 6.9S0 460.9 0 448V64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9L224 210.7V64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9L464 226.7V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 13.3-10.7 24-24 24s-24-10.7-24-24V285.3L278.6 470.7zM201.4 256 48 102.6v306.8z"})
);

export default LanFastForwardRegular;
