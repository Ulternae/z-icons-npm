import React from 'react';

export interface LanCommentDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotSolid: React.FC<LanCommentDotSolidProps>;
export default LanCommentDotSolid;
