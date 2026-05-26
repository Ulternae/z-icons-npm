import React from 'react';

export interface LanCommentAltPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltPlus: React.FC<LanCommentAltPlusProps>;
export default LanCommentAltPlus;
