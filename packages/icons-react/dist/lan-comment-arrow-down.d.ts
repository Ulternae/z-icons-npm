import React from 'react';

export interface LanCommentArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentArrowDown: React.FC<LanCommentArrowDownProps>;
export default LanCommentArrowDown;
