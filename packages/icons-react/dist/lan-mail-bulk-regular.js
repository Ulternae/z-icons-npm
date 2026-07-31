import React from 'react';

export const LanMailBulkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 48h304c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v128h48zm96 128v-32h320v224H400v48h128c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H208c-26.5 0-48 21.5-48 48v32zm96 96v22.8l-125.1 72.4c-.9.5-1.9.8-2.9.8s-2-.3-2.9-.8L48 294.8V272zM48 464V350.3l101.1 58.5c8.2 4.7 17.5 7.2 26.9 7.2s18.8-2.5 26.9-7.2L304 350.3V464zm0-240c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm376-32c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"})
);

export default LanMailBulkRegular;
