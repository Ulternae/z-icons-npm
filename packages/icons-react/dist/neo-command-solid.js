import React from 'react';

export const NeoCommandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 504 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M196 168v-42c0-27.4-8.8-52.5-27.2-70.8S125.4 28 98 28s-52.5 8.8-70.8 27.2S0 98.6 0 126s8.8 52.5 27.2 70.8S70.6 224 98 224h42v112H98c-27.4 0-52.5 8.8-70.8 27.2S0 406.6 0 434s8.8 52.5 27.2 70.8S70.6 532 98 532s52.5-8.8 70.8-27.2S196 461.4 196 434v-42h112v42c0 27.4 8.8 52.5 27.2 70.8S378.6 532 406 532s52.5-8.8 70.8-27.2S504 461.4 504 434s-8.8-52.5-27.2-70.8S433.4 336 406 336h-42V224h42c27.4 0 52.5-8.8 70.8-27.2S504 153.4 504 126s-8.8-52.5-27.2-70.8S433.4 28 406 28s-52.5 8.8-70.8 27.2S308 98.6 308 126v42zm0 56h112v112H196z"})
);

export default NeoCommandSolid;
