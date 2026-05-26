import React from 'react';

export interface LanCommentMiddleTopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMiddleTop: React.FC<LanCommentMiddleTopProps>;
export default LanCommentMiddleTop;
