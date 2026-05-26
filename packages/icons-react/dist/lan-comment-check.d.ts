import React from 'react';

export interface LanCommentCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCheck: React.FC<LanCommentCheckProps>;
export default LanCommentCheck;
