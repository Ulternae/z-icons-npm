import React from 'react';

export interface LanCommentAltSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltSmile: React.FC<LanCommentAltSmileProps>;
export default LanCommentAltSmile;
