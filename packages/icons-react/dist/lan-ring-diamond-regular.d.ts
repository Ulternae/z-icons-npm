import React from 'react';

export interface LanRingDiamondRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingDiamondRegular: React.FC<LanRingDiamondRegularProps>;
export default LanRingDiamondRegular;
