import React from 'react';

export function LanPlaneUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -24 512 568.045',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M200 32c0-30.9 25.1-56 56-56s56 25.1 56 56v108.5l189.4 173.6c1.7 1.5 2.6 3.7 2.6 5.9v80c0 2.6-1.2 5-3.3 6.5s-4.8 1.9-7.2 1.1L312 347.1v73.1l77 61.6c1.9 1.5 3 3.8 3 6.2v48c0 2.5-1.1 4.8-3.1 6.3s-4.5 2.1-6.9 1.5l-126-31.6-126.1 31.6c-2.4.6-4.9.1-6.9-1.5s-3.1-3.8-3.1-6.3v-48c0-2.4 1.1-4.7 3-6.2l77-61.6v-73.1L18.4 407.6c-2.4.8-5.1.4-7.2-1.1S8 402.6 8 400v-80c0-2.2.9-4.4 2.6-5.9L200 140.5zm96 112V32c0-22.1-17.9-40-40-40s-40 17.9-40 40v392c0 2.4-1.1 4.7-3 6.2l-77 61.6v33.9l118.1-29.5q1.95-.45 3.9 0l118.1 29.5v-33.9l-77-61.6c-1.9-1.5-3-3.8-3-6.2V144zm16 186.2 176 58.7v-65.4L312 162.2zm-288-6.7v65.4l176-58.7v-168z"})
  );
}

export default LanPlaneUpThin;
