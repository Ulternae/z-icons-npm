import React from 'react';

export interface LanCommentAltDotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltDots: React.FC<LanCommentAltDotsProps>;
export default LanCommentAltDots;
