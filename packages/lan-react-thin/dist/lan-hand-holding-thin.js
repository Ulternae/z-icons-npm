import React from 'react';

export function LanHandHoldingThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M187.4 320c-14.2 0-28.1 4.2-39.9 12.1L69.6 384H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h64c1.6 0 3.1-.5 4.4-1.3l79.9-53.3c9.2-6.1 20-9.4 31.1-9.4H336c17.7 0 32 14.3 32 32s-14.3 32-32 32h-88c-4.4 0-8 3.6-8 8s3.6 8 8 8h148.6c1.5 0 3.1-.4 4.3-1.3l114.2-74c4.7-3 10.3-4.7 15.9-4.7 15.9 0 29 12.9 29 28.6 0 9.5-4.7 18.3-12.5 23.7L412 480.7c-14.6 10-31.9 15.3-49.6 15.3H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h354.4c20.9 0 41.3-6.3 58.6-18.1l135.5-92.4c12.2-8.3 19.5-22.1 19.5-36.9 0-24.7-20.4-44.6-45-44.6-8.7 0-17.3 2.5-24.6 7.2L394.2 400h-22.4c7.6-8.5 12.2-19.7 12.2-32 0-26.5-21.5-48-48-48z"})
  );
}

export default LanHandHoldingThin;
