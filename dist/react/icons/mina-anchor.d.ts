import React from 'react';

export interface MinaAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAnchor: React.FC<MinaAnchorProps>;
export default MinaAnchor;
