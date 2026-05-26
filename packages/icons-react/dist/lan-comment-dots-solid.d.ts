import React from 'react';

export interface LanCommentDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotsSolid: React.FC<LanCommentDotsSolidProps>;
export default LanCommentDotsSolid;
