import React from 'react';

export function LanSquareALockThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 48h320c26.5 0 48 21.5 48 48v48c5.4 0 10.8.4 16 1.1V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h209.3c-.9-5.2-1.3-10.5-1.3-16H96c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48m167.2 116.4c-1.4-2.7-4.1-4.4-7.2-4.4s-5.8 1.7-7.2 4.4l-88 176c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l21.8-43.6H315l5.2 10.4c3.3-4.9 7-9.4 11.1-13.6zm-7.2 21.5L307.1 288H204.9zm256 70.2V320h-96v-63.9c0-26.5 21.5-48 48-48s48 21.5 48 48M368 368c0-17.7 14.3-32 32-32v.1h128v-.1c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H400c-17.7 0-32-14.3-32-32zm160-111.9c0-35.3-28.7-64-64-64s-64 28.7-64 64V320c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48z"})
  );
}

export default LanSquareALockThin;
