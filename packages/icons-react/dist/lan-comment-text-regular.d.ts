import React from 'react';

export interface LanCommentTextRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentTextRegular: React.FC<LanCommentTextRegularProps>;
export default LanCommentTextRegular;
