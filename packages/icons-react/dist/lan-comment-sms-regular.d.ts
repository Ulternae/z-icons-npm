import React from 'react';

export interface LanCommentSmsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentSmsRegular: React.FC<LanCommentSmsRegularProps>;
export default LanCommentSmsRegular;
