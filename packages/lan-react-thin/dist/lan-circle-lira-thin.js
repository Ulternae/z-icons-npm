import React from 'react';

export function LanCircleLiraThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m251.8-144h3.1c23.3 0 45.7 9.3 62.2 25.8l8.6 8.6c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-8.6-8.6a71.98 71.98 0 0 0-50.9-21.1h-3.1c-39 0-66 38.8-52.5 75.4l7.6 20.6h105.2c4.4 0 8 3.6 8 8s-3.6 8-8 8h-99.8c2.7 10.5 3.4 21.4 2.2 32H312c4.4 0 8 3.6 8 8s-3.6 8-8 8H211.2c-2.4 7.9-5.8 15.6-10.4 22.7L174.6 352H344c4.4 0 8 3.6 8 8s-3.6 8-8 8H160c-2.9 0-5.6-1.6-7-4.2s-1.3-5.7.3-8.1l34.1-53.6c2.9-4.5 5.2-9.2 7-14.1H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h30.3c1.4-10.6.5-21.6-2.7-32H168c-4.4 0-8-3.6-8-8s3.6-8 8-8h21.8l-5.6-15.1c-17.3-47 17.5-96.9 67.6-96.9"})
  );
}

export default LanCircleLiraThin;
