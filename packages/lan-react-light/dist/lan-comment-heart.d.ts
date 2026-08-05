import React from 'react';

export interface LanCommentHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCommentHeart(props: LanCommentHeartProps): React.ReactElement;
export default LanCommentHeart;
