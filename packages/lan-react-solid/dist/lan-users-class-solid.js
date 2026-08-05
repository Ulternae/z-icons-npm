import React from 'react';

export function LanUsersClassSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 0C92.7 0 64 28.7 64 64v148.6c10.1-3 20.9-4.6 32-4.6s21.9 1.6 32 4.6V64h384v148.6c10.1-3 20.9-4.6 32-4.6s21.9 1.6 32 4.6V64c0-35.3-28.7-64-64-64zm32 320a64 64 0 1 0-128 0 64 64 0 1 0 128 0M0 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64m384-160a64 64 0 1 0-128 0 64 64 0 1 0 128 0M224 480c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64h-64c-35.3 0-64 28.7-64 64m320-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-32 32c-35.3 0-64 28.7-64 64 0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32 0-35.3-28.7-64-64-64z"})
  );
}

export default LanUsersClassSolid;
