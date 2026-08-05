import React from 'react';

export function LanArrowRightFromArcSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256c0-106 86-192 192-192 17.7 0 32-14.3 32-32S273.7 0 256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c17.7 0 32-14.3 32-32s-14.3-32-32-32c-106 0-192-86-192-192m326.6-134.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l57.4 57.3H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h210.7l-57.4 57.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3z"})
  );
}

export default LanArrowRightFromArcSolid;
