import React from 'react';

export interface LanCommentsDollarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsDollar: React.FC<LanCommentsDollarProps>;
export default LanCommentsDollar;
