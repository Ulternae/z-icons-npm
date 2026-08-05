import React from 'react';

export function LanWonSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M31.6 37.6c-1.3-4.2-5.8-6.6-10-5.2s-6.6 5.8-5.2 10L88.7 272H32c-4.4 0-8 3.6-8 8s3.6 8 8 8h61.7l58.7 186.4c1.1 3.5 4.4 5.7 8 5.6s6.7-2.7 7.5-6.3L209.2 288H303l41.3 185.7c.8 3.5 3.8 6.1 7.5 6.3s6.9-2.1 8-5.6L418.3 288H480c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56.6l72.3-229.6c1.3-4.2-1-8.7-5.2-10s-8.7 1-10 5.2L406.7 272h-90.8L264 38.3c-.8-3.7-4.1-6.3-7.8-6.3s-7 2.6-7.8 6.3L196.3 272h-90.9zM110.5 288h82.2l-34 153.1zm102.2-16L256 76.9 299.4 272h-86.8zm106.7 16h82.2l-48.2 153.1z"})
  );
}

export default LanWonSignThin;
