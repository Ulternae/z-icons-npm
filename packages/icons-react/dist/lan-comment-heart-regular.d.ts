import React from 'react';

export interface LanCommentHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentHeartRegular: React.FC<LanCommentHeartRegularProps>;
export default LanCommentHeartRegular;
