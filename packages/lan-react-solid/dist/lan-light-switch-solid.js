import React from 'react';

export function LanLightSwitchSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 96v72h192v-72c0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64m0 120v72c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-72z"})
  );
}

export default LanLightSwitchSolid;
