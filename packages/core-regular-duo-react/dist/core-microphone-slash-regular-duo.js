import React from 'react';

export function CoreMicrophoneSlashRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.3 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M289 89c2-8.9 7.7-16.5 15.5-20.9l2.4-1.2h.1c.2-.1.3-.2.5-.2 3.9-1.7 8.2-2.7 12.8-2.7 4.4 0 8.6.9 12.5 2.5q2.85 1.2 5.4 3c8.5 5.8 14.1 15.5 14.1 26.5v56.2z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"m621.5 512-45.3 45.2L19 0l45.3-45.3zM160.4 231.9c4 82 69.8 147.8 151.8 151.8l40 40v88.2h-64v-66.3C179.7 430.2 96.3 336.8 96.3 224v-32h24.2zm383.8-7.9c0 35.1-8.1 68.3-22.4 97.8l-49.1-49.1c4.9-15.4 7.6-31.7 7.6-48.7v-32h64v32zM320.3 0c53 0 96 43 96 96v120.2l-64-64V96c0-17.7-14.3-32-32-32-15.3 0-28 10.7-31.2 25l-47.8-47.7C258.7 16.4 287.5 0 320.3 0"})
  );
}

export default CoreMicrophoneSlashRegularDuo;
