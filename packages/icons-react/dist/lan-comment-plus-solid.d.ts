import React from 'react';

export interface LanCommentPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPlusSolid: React.FC<LanCommentPlusSolidProps>;
export default LanCommentPlusSolid;
