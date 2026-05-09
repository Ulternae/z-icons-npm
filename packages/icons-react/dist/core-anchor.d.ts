import React from 'react';

export interface CoreAnchorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAnchor: React.FC<CoreAnchorProps>;
export default CoreAnchor;
