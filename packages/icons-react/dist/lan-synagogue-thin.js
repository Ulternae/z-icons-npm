import React from 'react';

export const LanSynagogueThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 24c-35.3 0-64 28.7-64 64v360c0 35.3 28.7 64 64 64h416c35.3 0 64-28.7 64-64V88c0-35.3-28.7-64-64-64s-64 28.7-64 64v34.7L291.7 48.9c-2.3-1.2-5.1-1.2-7.5 0L144 122.7V88c0-35.3-28.7-64-64-64m48 104H32V88c0-26.5 21.5-48 48-48s48 21.5 48 48zm-96 16h96v352H80c-26.5 0-48-21.5-48-48zm112-3.2L288 65l144 75.8V496h-80v-96c0-35.3-28.7-64-64-64s-64 28.7-64 64v96h-80zM240 496v-96c0-26.5 21.5-48 48-48s48 21.5 48 48v96zm208-352h96v304c0 26.5-21.5 48-48 48h-48zm96-16h-96V88c0-26.5 21.5-48 48-48s48 21.5 48 48zm-298 80a42 42 0 1 1 84 0 42 42 0 1 1-84 0m98 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanSynagogueThin;
