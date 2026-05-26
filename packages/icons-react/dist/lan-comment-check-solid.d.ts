import React from 'react';

export interface LanCommentCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCheckSolid: React.FC<LanCommentCheckSolidProps>;
export default LanCommentCheckSolid;
