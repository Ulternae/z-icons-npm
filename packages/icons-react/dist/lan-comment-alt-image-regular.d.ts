import React from 'react';

export interface LanCommentAltImageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentAltImageRegular: React.FC<LanCommentAltImageRegularProps>;
export default LanCommentAltImageRegular;
