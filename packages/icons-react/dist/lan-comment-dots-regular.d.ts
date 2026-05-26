import React from 'react';

export interface LanCommentDotsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentDotsRegular: React.FC<LanCommentDotsRegularProps>;
export default LanCommentDotsRegular;
