import React from 'react';

export function LanLightEmergencyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 320h-16V192c0-88.4-71.6-160-160-160S64 103.6 64 192v128H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48m-32-128v128H80V192c0-79.5 64.5-144 144-144s144 64.5 144 144M48 336h352c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m96-136c0-48.6 39.4-88 88-88 4.4 0 8-3.6 8-8s-3.6-8-8-8c-57.4 0-104 46.6-104 104 0 4.4 3.6 8 8 8s8-3.6 8-8"})
  );
}

export default LanLightEmergencyThin;
