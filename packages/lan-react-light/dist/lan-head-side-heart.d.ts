import React from 'react';

export interface LanHeadSideHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideHeart(props: LanHeadSideHeartProps): React.ReactElement;
export default LanHeadSideHeart;
