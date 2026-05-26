import React from 'react';

export interface LanCommentImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentImageSolid: React.FC<LanCommentImageSolidProps>;
export default LanCommentImageSolid;
