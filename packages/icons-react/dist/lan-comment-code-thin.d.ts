import React from 'react';

export interface LanCommentCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCodeThin: React.FC<LanCommentCodeThinProps>;
export default LanCommentCodeThin;
