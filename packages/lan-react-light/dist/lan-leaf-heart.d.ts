import React from 'react';

export interface LanLeafHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafHeart(props: LanLeafHeartProps): React.ReactElement;
export default LanLeafHeart;
