import React from 'react';

export function LanTrafficLightStopThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 320 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256-16c26.5 0 48 21.5 48 48v352c0 79.5-64.5 144-144 144S16 463.5 16 384V32c0-26.5 21.5-48 48-48zM64-32C28.7-32 0-3.3 0 32v352c0 88.4 71.6 160 160 160s160-71.6 160-160V32c0-35.3-28.7-64-64-64zm96 392c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40m0-16c-30.9 0-56 25.1-56 56s25.1 56 56 56 56-25.1 56-56-25.1-56-56-56m40-88a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-96 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0m56-104a40 40 0 1 1 0-80 40 40 0 1 1 0 80m0-96a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 40a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
  );
}

export default LanTrafficLightStopThin;
