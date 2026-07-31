import React from 'react';

export const Lan9Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 168v184c0 70.7-57.3 128-128 128H88c-4.4 0-8-3.6-8-8s3.6-8 8-8h136c61.9 0 112-50.1 112-112V232.1c-22.9 42.8-68.1 71.9-120 71.9h-64c-75.1 0-136-60.9-136-136S76.9 32 152 32h64c71.6 0 130.2 55.3 135.6 125.5.3.8.4 1.6.4 2.5zm-16 0c0-66.3-53.7-120-120-120h-64C85.7 48 32 101.7 32 168s53.7 120 120 120h64c66.3 0 120-53.7 120-120"})
);

export default Lan9Thin;
