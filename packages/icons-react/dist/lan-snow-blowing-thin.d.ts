import React from 'react';

export interface LanSnowBlowingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowBlowingThin: React.FC<LanSnowBlowingThinProps>;
export default LanSnowBlowingThin;
