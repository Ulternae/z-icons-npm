import React from 'react';

export interface LanCommentDotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotRegular: React.FC<LanCommentDotRegularProps>;
export default LanCommentDotRegular;
