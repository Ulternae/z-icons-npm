import React from 'react';

export interface LanCommentDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDollar: React.FC<LanCommentDollarProps>;
export default LanCommentDollar;
