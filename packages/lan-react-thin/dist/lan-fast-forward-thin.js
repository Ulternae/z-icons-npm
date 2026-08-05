import React from 'react';

export function LanFastForwardThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M504 480c4.4 0 8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v187.6L276.8 39.7c-9.5-8.1-22.8-10-34.2-4.8S224 51.5 224 64v122.4L52.8 39.7c-9.5-8.1-22.8-10-34.2-4.8S0 51.5 0 64v384c0 12.5 7.3 23.8 18.6 29.1s24.7 3.4 34.2-4.8L224 325.6V448c0 12.5 7.3 23.8 18.6 29.1s24.7 3.4 34.2-4.8L496 284.4V472c0 4.4 3.6 8 8 8M240 311.9V64c0-6.2 3.6-11.9 9.3-14.5s12.4-1.7 17.1 2.4l224 192c3.5 3 5.6 7.5 5.6 12.1s-2 9.1-5.6 12.1l-224 192c-4.7 4.1-11.4 5-17.1 2.4s-9.3-8.3-9.3-14.5zm-16-104.4v97L42.4 460.1c-4.7 4.1-11.4 5-17.1 2.4S16 454.2 16 448V64c0-6.2 3.6-11.9 9.3-14.5s12.4-1.7 17.1 2.4z"})
  );
}

export default LanFastForwardThin;
