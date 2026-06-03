import React from 'react';

export const LanAirConditionerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128v128c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm24 144h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H88c-13.3 0-24-10.7-24-24s10.7-24 24-24m120 264c0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24c0 39.8 32.2 72 72 72s72-32.2 72-72V368h-48zm160-104h-48v104c0 39.8 32.2 72 72 72s72-32.2 72-72c0-13.3-10.7-24-24-24s-24 10.7-24 24-10.7 24-24 24-24-10.7-24-24z"})
);

export default LanAirConditionerSolid;
