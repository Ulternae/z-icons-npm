import React from 'react';

export const CoreBriefcaseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 60h128c2.2 0 4 1.8 4 4v32H188V64c0-2.2 1.8-4 4-4m-60 4v32H64c-35.3 0-64 28.7-64 64v60h512v-60c0-35.3-28.7-64-64-64h-68V64c0-33.1-26.9-60-60-60H192c-33.1 0-60 26.9-60 60m380 196H0v188c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64z"})
);

export default CoreBriefcaseSolid;
