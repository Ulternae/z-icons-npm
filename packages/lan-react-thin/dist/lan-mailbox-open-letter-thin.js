import React from 'react';

export function LanMailboxOpenLetterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 240H48c-17.7 0-32 14.3-32 32v11.6l149.7 97.3 2.4 1.3c2.5 1.1 5.2 1.8 7.9 1.8 3.7 0 7.3-1.1 10.3-3.1L304 304.4v19.1l-108.9 70.8c-5.7 3.7-12.3 5.7-19.1 5.7-5.1 0-10.1-1.1-14.7-3.2l-4.4-2.5L16 302.7V432c0 17.7 14.3 32 32 32h256v16H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h256zm96-160H296c42.8 22.9 72 68 72 120v264h208c26.5 0 48-21.5 48-48V224c0-23.8-5.8-46.2-16-66v-30c20.1 26.7 32 60 32 96v192l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-224v-280c0-66.3-53.7-120-120-120-58.1 0-106.5 41.2-117.6 96H98.2C109.5 112.3 165.1 64 232 64h168zm136-16c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V88c0-13.3 10.7-24 24-24zm-64 16c-4.4 0-8 3.6-8 8v56h72c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8z"})
  );
}

export default LanMailboxOpenLetterThin;
