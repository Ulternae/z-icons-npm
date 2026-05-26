import React from 'react';

export interface LanCommentArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentArrowUp: React.FC<LanCommentArrowUpProps>;
export default LanCommentArrowUp;
