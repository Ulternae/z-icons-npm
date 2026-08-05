import React from 'react';

export function LanBridgeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56s10.7 24 24 24h16v64H24c-13.3 0-24 10.7-24 24v88c0 9.1 5.1 17.4 13.3 21.5l3.8 1.9c19 9.5 31 28.9 31 50.1L48 440c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40v-72c0-35.3 28.7-64 64-64s64 28.7 64 64v72c0 22.1 17.9 40 40 40h64c22.1 0 40-17.9 40-40V329.4c0-21.2 12-40.6 31-50.1l3.8-1.9c8.1-4.1 13.3-12.4 13.3-21.5v-88c0-13.3-10.7-24-24-24h-16v-64h16c13.3 0 24-10.7 24-24s-10.7-24-24-24zm400 48v64h-80V80zm-128 0v64h-80V80zm-128 0v64H88V80zm24 112h272v49.8c-29.7 19-48 51.9-48 87.6V432h-48v-64c0-61.9-50.1-112-112-112s-112 50.1-112 112v64H96V329.4c0-35.7-18.3-68.7-48-87.6V192z"})
  );
}

export default LanBridgeRegular;
