import React from 'react';

export function LanComputerSpeakerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M252.8 32C244.7 46.1 240 62.5 240 80H64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h176v48H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM240 432c0 17.5 4.7 33.9 12.8 48H120c-13.3 0-24-10.7-24-24s10.7-24 24-24zm96-352v352h192V80zm-48 0c0-26.5 21.5-48 48-48h192c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48zm112 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 128a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
  );
}

export default LanComputerSpeakerRegular;
