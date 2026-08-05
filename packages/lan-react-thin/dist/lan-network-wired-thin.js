import React from 'react';

export function LanNetworkWiredThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 48c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32V80c0-17.7 14.3-32 32-32zm-96-16c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h40v56H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h144v56h-40c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-40v-56h240v56h-40c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-40v-56h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H296v-56h40c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 336h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32m352 0c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32z"})
  );
}

export default LanNetworkWiredThin;
