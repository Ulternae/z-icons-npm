import React from 'react';

export function LanAirConditionerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 112c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 48h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 296V368h48v104c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-13.3 10.7-24 24-24s24 10.7 24 24 10.7 24 24 24 24-10.7 24-24m160-104v104c0 13.3 10.7 24 24 24s24-10.7 24-24 10.7-24 24-24 24 10.7 24 24c0 39.8-32.2 72-72 72s-72-32.2-72-72V368z"})
  );
}

export default LanAirConditionerRegular;
