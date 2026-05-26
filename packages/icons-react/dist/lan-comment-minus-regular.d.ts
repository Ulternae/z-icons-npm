import React from 'react';

export interface LanCommentMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentMinusRegular: React.FC<LanCommentMinusRegularProps>;
export default LanCommentMinusRegular;
