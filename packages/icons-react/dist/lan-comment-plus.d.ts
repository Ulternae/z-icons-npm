import React from 'react';

export interface LanCommentPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPlus: React.FC<LanCommentPlusProps>;
export default LanCommentPlus;
