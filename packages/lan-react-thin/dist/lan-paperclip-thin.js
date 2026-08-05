import React from 'react';

export function LanPaperclipThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16.775 512 528.775',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264.4 18.4c46.9-46.9 122.8-46.9 169.7 0s46.9 122.8 0 169.7L247.4 374.8c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l175.3-175.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L168.2 295.6c-18.7 18.7-18.7 49.1 0 67.9s49.1 18.7 67.9 0l186.6-186.7c40.6-40.6 40.6-106.5 0-147.1s-106.5-40.6-147.1 0L72 233.4c-59.4 59.4-59.4 155.6 0 215s155.6 59.4 215 0l169.7-169.8c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L298.3 459.6c-65.6 65.6-172 65.6-237.6 0s-65.6-172 0-237.6z"})
  );
}

export default LanPaperclipThin;
