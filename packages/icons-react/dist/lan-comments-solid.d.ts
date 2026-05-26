import React from 'react';

export interface LanCommentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentsSolid: React.FC<LanCommentsSolidProps>;
export default LanCommentsSolid;
