import React from 'react';

export interface LanCommentCodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentCodeRegular: React.FC<LanCommentCodeRegularProps>;
export default LanCommentCodeRegular;
