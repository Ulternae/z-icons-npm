import React from 'react';

export interface LanCommentTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTextSolid: React.FC<LanCommentTextSolidProps>;
export default LanCommentTextSolid;
