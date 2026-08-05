import React from 'react';

export interface LanCircleHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHeart(props: LanCircleHeartProps): React.ReactElement;
export default LanCircleHeart;
