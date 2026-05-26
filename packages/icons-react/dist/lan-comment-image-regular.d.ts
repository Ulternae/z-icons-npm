import React from 'react';

export interface LanCommentImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentImageRegular: React.FC<LanCommentImageRegularProps>;
export default LanCommentImageRegular;
