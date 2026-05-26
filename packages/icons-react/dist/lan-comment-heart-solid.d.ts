import React from 'react';

export interface LanCommentHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentHeartSolid: React.FC<LanCommentHeartSolidProps>;
export default LanCommentHeartSolid;
