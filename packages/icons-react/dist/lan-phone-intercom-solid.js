import React from 'react';

export const LanPhoneIntercomSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h16c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm176 0c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm24 312a24 24 0 1 1 0 48 24 24 0 1 1 0-48m64 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m112-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M224 131.2c0-19.4 15.8-35.2 35.2-35.2h153.6c19.4 0 35.2 15.8 35.2 35.2v89.6c0 19.4-15.8 35.2-35.2 35.2H259.2c-19.4 0-35.2-15.8-35.2-35.2z"})
);

export default LanPhoneIntercomSolid;
