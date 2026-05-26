import React from 'react';

export interface LanLifeRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLifeRingRegular: React.FC<LanLifeRingRegularProps>;
export default LanLifeRingRegular;
