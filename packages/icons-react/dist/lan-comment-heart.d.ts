import React from 'react';

export interface LanCommentHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommentHeart: React.FC<LanCommentHeartProps>;
export default LanCommentHeart;
