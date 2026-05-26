import React from 'react';

export interface LanCommentAltImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltImageSolid: React.FC<LanCommentAltImageSolidProps>;
export default LanCommentAltImageSolid;
