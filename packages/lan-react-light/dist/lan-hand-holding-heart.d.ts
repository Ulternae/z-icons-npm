import React from 'react';

export interface LanHandHoldingHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingHeart(props: LanHandHoldingHeartProps): React.ReactElement;
export default LanHandHoldingHeart;
