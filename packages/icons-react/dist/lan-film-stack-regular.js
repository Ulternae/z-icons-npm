import React from 'react';

export const LanFilmStackRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96-8c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H120C106.7 16 96 5.3 96-8M48 88c0-13.3 10.7-24 24-24h368c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24m48 120H64c-8.8 0-16 7.2-16 16v24h48zm0-48h352c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64zm48 272h224V208H144zm272-224v40h48v-24c0-8.8-7.2-16-16-16zm48 88h-48v48h48zm0 96h-48v40h32c8.8 0 16-7.2 16-16zM96 432v-40H48v24c0 8.8 7.2 16 16 16zm-48-88h48v-48H48z"})
);

export default LanFilmStackRegular;
