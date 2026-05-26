import React from 'react';

export interface LanCommentMiddleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMiddleRegular: React.FC<LanCommentMiddleRegularProps>;
export default LanCommentMiddleRegular;
