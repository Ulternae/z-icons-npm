import React from 'react';

export interface LanCommentAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAlt: React.FC<LanCommentAltProps>;
export default LanCommentAlt;
