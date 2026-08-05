import React from 'react';

export function LanLightEmergencyOnSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M69.3 36c-11-7.4-25.9-4.4-33.3 6.7S31.7 68.6 42.7 76l48 32c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3zm528 40c11-7.4 14-22.3 6.7-33.3s-22.3-14-33.3-6.7l-48 32c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7zM24 192c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm528 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zM320 32c-88.4 0-160 71.6-160 160v112h320V192c0-88.4-71.6-160-160-160m-64 168c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-66.3 53.7-120 120-120 13.3 0 24 10.7 24 24s-10.7 24-24 24c-39.8 0-72 32.2-72 72M96 384v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32"})
  );
}

export default LanLightEmergencyOnSolid;
