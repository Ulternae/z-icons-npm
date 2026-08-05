import React from 'react';

export function LanOmegaThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 48C109.1 48 16 141.1 16 256c0 75.3 40 141.3 100 177.8 7.4 4.5 12.4 12.5 12.4 21.6 0 13.6-11 24.6-24.6 24.6H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h95.7c4.8 0 8.6-3.9 8.6-8.6 0-3.1-1.7-6.1-4.7-7.9C43.1 408.2 0 337.2 0 256.1c0-123.7 100.3-224 224-224S448 132.3 448 256c0 81.1-43.1 152.1-107.6 191.4-3 1.8-4.7 4.9-4.7 7.9 0 4.8 3.9 8.6 8.6 8.6H440c4.4 0 8 3.6 8 8s-3.6 8-8 8h-95.7c-13.6 0-24.6-11-24.6-24.6 0-9.1 5-17.1 12.4-21.6 60-36.5 100-102.5 100-177.8 0-114.9-93.1-208-208-208z"})
  );
}

export default LanOmegaThin;
