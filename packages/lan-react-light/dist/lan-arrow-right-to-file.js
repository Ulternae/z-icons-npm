import React from 'react';

export function LanArrowRightToFile({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-48H64v48c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L306.7 18.7C294.7 6.7 278.5 0 261.5 0H128C92.7 0 64 28.7 64 64v208h32V64c0-17.7 14.3-32 32-32m160 13.3L402.7 160H320c-17.7 0-32-14.3-32-32zM0 336c0 8.8 7.2 16 16 16h249.4l-44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6l-72-72c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l44.7 44.7H16c-8.8 0-16 7.2-16 16"})
  );
}

export default LanArrowRightToFile;
