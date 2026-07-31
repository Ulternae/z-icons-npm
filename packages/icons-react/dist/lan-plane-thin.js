import React from 'react';

export const LanPlaneThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 200c30.9 0 56 25.1 56 56s-25.1 56-56 56H403.5L229.9 501.4c-1.5 1.7-3.7 2.6-5.9 2.6h-80c-2.6 0-5-1.2-6.5-3.3s-1.9-4.8-1.1-7.2L196.9 312h-73.1l-61.6 77c-1.5 1.9-3.8 3-6.2 3H8c-2.5 0-4.8-1.1-6.3-3.1S-.4 384.4.2 382l31.6-126L.2 129.9c-.6-2.4-.1-4.9 1.5-6.9s3.8-3 6.3-3h48c2.4 0 4.7 1.1 6.2 3l61.6 77h73.1L136.4 18.5c-.8-2.4-.4-5.1 1.1-7.2S141.4 8 144 8h80c2.2 0 4.4.9 5.9 2.6L403.5 200zm-112 96h112c22.1 0 40-17.9 40-40s-17.9-40-40-40H120c-2.4 0-4.7-1.1-6.2-3l-61.6-77H18.3l29.5 118.1q.45 1.95 0 3.9L18.3 376.1h33.9l61.6-77c1.5-1.9 3.8-3 6.2-3h280zm-186.2 16-58.7 176h65.4l161.3-176zm6.7-288h-65.4l58.7 176h168z"})
);

export default LanPlaneThin;
