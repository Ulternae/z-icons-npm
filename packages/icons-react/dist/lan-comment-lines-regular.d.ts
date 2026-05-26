import React from 'react';

export interface LanCommentLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentLinesRegular: React.FC<LanCommentLinesRegularProps>;
export default LanCommentLinesRegular;
