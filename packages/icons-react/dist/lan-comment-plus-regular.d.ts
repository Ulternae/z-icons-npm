import React from 'react';

export interface LanCommentPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPlusRegular: React.FC<LanCommentPlusRegularProps>;
export default LanCommentPlusRegular;
