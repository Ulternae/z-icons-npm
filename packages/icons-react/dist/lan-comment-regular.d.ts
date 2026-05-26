import React from 'react';

export interface LanCommentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentRegular: React.FC<LanCommentRegularProps>;
export default LanCommentRegular;
