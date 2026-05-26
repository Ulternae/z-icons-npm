import React from 'react';

export interface LanCommentTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTimesSolid: React.FC<LanCommentTimesSolidProps>;
export default LanCommentTimesSolid;
