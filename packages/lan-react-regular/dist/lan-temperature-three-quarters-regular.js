import React from 'react';

export function LanTemperatureThreeQuartersRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 48c-35.3 0-64 28.7-64 64v174.4c0 6.1-2.3 11.9-6.4 16.3C73.7 319.8 64 342.7 64 368c0 53 43 96 96 96s96-43 96-96c0-25.2-9.7-48.1-25.6-65.3-4.1-4.4-6.4-10.3-6.4-16.3V112c0-35.3-28.7-64-64-64M48 112C48 50.1 98.1 0 160 0s112 50.1 112 112v165.5c20 24.7 32 56.2 32 90.5 0 79.5-64.5 144-144 144S16 447.5 16 368c0-34.3 12-65.8 32-90.5zm160 256c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6V176c0-13.3 10.7-24 24-24s24 10.7 24 24v150.4c14.3 8.3 24 23.8 24 41.6"})
  );
}

export default LanTemperatureThreeQuartersRegular;
