import React from 'react';

export function LanTrainSubwayThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384.196 544.096',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 16c44.2 0 80 35.8 80 80v256c0 44.2-35.8 80-80 80H96c-44.2 0-80-35.8-80-80V96c0-44.2 35.8-80 80-80zM96 0C43 0 0 43 0 96v256c0 45.2 31.2 83 73.2 93.3L1.9 530.9c-2.8 3.4-2.4 8.4 1 11.3s8.4 2.4 11.3-1L91.9 448c1.4.1 2.8.1 4.2.1h192c1.4 0 2.8 0 4.2-.1l77.7 93.2c2.8 3.4 7.9 3.9 11.3 1s3.9-7.9 1-11.3L311 445.3c41.8-10.3 73-48.1 73-93.3V96c0-53-43-96-96-96zm48 336a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-32-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m160 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64m-16-32a16 16 0 1 1 32 0 16 16 0 1 1-32 0M184 80v160H96c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zm16 0h88c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-88zM96 64c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"})
  );
}

export default LanTrainSubwayThin;
