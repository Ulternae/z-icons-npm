import React from 'react';

export interface LanCommentNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentNodesSolid: React.FC<LanCommentNodesSolidProps>;
export default LanCommentNodesSolid;
