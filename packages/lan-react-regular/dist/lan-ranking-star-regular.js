import React from 'react';

export function LanRankingStarRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M308.9 256.3c24.2 2.5 43.1 22.9 43.1 47.8v48h80l4.9.2c24.2 2.5 43.1 22.9 43.1 47.8v64l-.2 4.9c-2.3 22.6-20.3 40.6-42.8 42.8l-4.9.2h-368c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h96v-16c0-24.9 18.9-45.3 43.1-47.8l4.9-.2h96l4.9.2zM64 464h96v-96H64zm144 0h96V304h-96zm144 0h80v-64h-80zM245.8 6.3c4.3-8.6 16.5-8.3 20.4 0L289.8 54l52.3 7.6c9.3 1.4 13.2 12.9 6.4 19.8l-37.9 36.7 8.9 52.1c1.4 9.3-8.3 16.5-16.8 12.2L256.2 158l-46.9 24.8c-8.6 4.3-18.3-2.9-16.8-12.2l8.9-52.1-37.9-37c-6.8-6.8-2.9-18.3 6.4-19.8l52.3-7.6 23.6-47.7z"})
  );
}

export default LanRankingStarRegular;
