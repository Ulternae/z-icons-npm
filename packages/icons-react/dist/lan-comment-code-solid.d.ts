import React from 'react';

export interface LanCommentCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCodeSolid: React.FC<LanCommentCodeSolidProps>;
export default LanCommentCodeSolid;
