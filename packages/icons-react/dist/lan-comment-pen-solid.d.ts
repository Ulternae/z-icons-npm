import React from 'react';

export interface LanCommentPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPenSolid: React.FC<LanCommentPenSolidProps>;
export default LanCommentPenSolid;
