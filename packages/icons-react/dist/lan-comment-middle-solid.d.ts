import React from 'react';

export interface LanCommentMiddleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMiddleSolid: React.FC<LanCommentMiddleSolidProps>;
export default LanCommentMiddleSolid;
