import React from 'react';

export function LanMangoThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 48c0-35.3 28.7-64 64-64h96V0c0 35.3-28.7 64-64 64h-96zm-16 16v48.6c-63.7 4.7-122 38.5-157.7 92.1L14.4 378.3C5 392.5 0 409.1 0 426c0 47.5 38.5 86 86 86h226c110.5 0 200-89.5 200-200s-89.5-200-200-200h-8V80h96c44.2 0 80-35.8 80-80v-16c0-8.8-7.2-16-16-16h-96c-44.2 0-80 35.8-80 80zM27.8 387.2l115.8-173.7c35.6-53.4 95.6-85.5 159.8-85.5h8.7c101.6 0 184 82.4 184 184S413.6 496 312 496H86c-38.6 0-70-31.3-70-70 0-13.8 4.1-27.3 11.8-38.8M432 296c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 66.3-53.7 120-120 120-4.4 0-8 3.6-8 8s3.6 8 8 8c75.1 0 136-60.9 136-136"})
  );
}

export default LanMangoThin;
