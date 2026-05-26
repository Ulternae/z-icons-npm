import React from 'react';

export interface LanCommentPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentPenRegular: React.FC<LanCommentPenRegularProps>;
export default LanCommentPenRegular;
