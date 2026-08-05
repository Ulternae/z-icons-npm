import React from 'react';

export interface LanHandsHoldingHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingHeart(props: LanHandsHoldingHeartProps): React.ReactElement;
export default LanHandsHoldingHeart;
