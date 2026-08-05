import React from 'react';

export interface LanCardHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardHeart(props: LanCardHeartProps): React.ReactElement;
export default LanCardHeart;
