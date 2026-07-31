import React from 'react';

export const LanPersonCircleQuestion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M200 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M140.8 191.1c1-1.7 2.1-3.4 3.2-5V528c0 8.8 7.2 16 16 16s16-7.2 16-16V368h96v160c0 8.8 7.2 16 16 16s16-7.2 16-16V186.1c1.1 1.6 2.2 3.3 3.2 5l47.4 79c7.4-8 15.4-15.4 24.1-22.1l-44-73.4C311.3 135.8 269.3 112 224 112s-87.3 23.8-110.6 62.6L50.3 279.8c-4.5 7.6-2.1 17.4 5.5 21.9s17.4 2.1 22-5.5l63.1-105.1zM272 336h-96V156.7c14.4-8.2 30.9-12.7 48-12.7s33.6 4.5 48 12.7zm112 64a112 112 0 1 1 224 0 112 112 0 1 1-224 0m256 0a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144 84a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-140c13.3 0 24 10.7 24 24 0 7.2-4.2 13.7-10.8 16.6l-12.4 5.5c-10.2 4.5-16.8 14.7-16.8 25.9 0 8.8 7.2 16 16 16 8 0 14.6-5.9 15.8-13.5l10.4-4.6c18.1-8.1 29.8-26 29.8-45.9 0-30.9-25.1-56-56-56-27.1 0-49.7 19.2-54.9 44.8-1.8 8.7 3.8 17.1 12.5 18.9s17.1-3.8 18.9-12.5c2.2-11 11.9-19.2 23.5-19.2"})
);

export default LanPersonCircleQuestion;
