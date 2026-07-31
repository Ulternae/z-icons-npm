import React from 'react';

export const LanCodePullRequestDraftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 72a56 56 0 1 1 112 0 56 56 0 1 1-112 0m64 71.6c36-4 64-34.5 64-71.6 0-39.8-32.2-72-72-72S0 32.2 0 72c0 37.1 28 67.6 64 71.6v224.9c-36 4-64 34.5-64 71.6 0 39.8 32.2 72 72 72s72-32.2 72-72c0-37.1-28-67.6-64-71.6zM72 384c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56m240 112c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56m0 16c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72m0-464a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80m-24 128a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"})
);

export default LanCodePullRequestDraftThin;
