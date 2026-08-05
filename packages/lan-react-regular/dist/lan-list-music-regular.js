import React from 'react';

export function LanListMusicRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M566.8 37.1c5.8 4.5 9.2 11.5 9.2 18.9v120c0 11-7.5 20.6-18.2 23.3L448 226.7V384c0 53-50.1 96-112 96s-112-43-112-96 50.1-96 112-96c23.8 0 45.9 6.4 64 17.2V88c0-11 7.5-20.6 18.2-23.3l128-32c7.2-1.8 14.8-.2 20.6 4.4M336 336c-42.6 0-64 28.2-64 48s21.4 48 64 48 64-28.2 64-48-21.4-48-64-48m112-158.7 80-20V86.8l-80 20zM56 72h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 160h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanListMusicRegular;
