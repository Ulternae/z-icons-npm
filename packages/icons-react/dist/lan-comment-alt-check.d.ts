import React from 'react';

export interface LanCommentAltCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltCheck: React.FC<LanCommentAltCheckProps>;
export default LanCommentAltCheck;
