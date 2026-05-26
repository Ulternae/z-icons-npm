import React from 'react';

export interface LanCommentSmileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmileRegular: React.FC<LanCommentSmileRegularProps>;
export default LanCommentSmileRegular;
