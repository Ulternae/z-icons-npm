import React from 'react';

export interface LanCommentTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTimesRegular: React.FC<LanCommentTimesRegularProps>;
export default LanCommentTimesRegular;
