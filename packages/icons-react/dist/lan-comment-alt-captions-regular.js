import React from 'react';

export const LanCommentAltCaptionsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m203.7 512.9 91.9-64.9H416c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128v224c0 53 43 96 96 96h32v72c0 9 5 17.2 13 21.3s17.6 3.5 24.9-1.7zM295.6 400c-9.9 0-19.6 3.1-27.7 8.8-28.6 20.2-59.3 41.8-91.9 64.9V424c0-2.8-.5-5.6-1.4-8.1-3.3-9.3-12.2-15.9-22.6-15.9H96c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48h320c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48zM120 208c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24zm224 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-224 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24zm144 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h128c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCommentAltCaptionsRegular;
