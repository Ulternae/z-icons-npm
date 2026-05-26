import React from 'react';

export interface LanFishingRodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishingRod: React.FC<LanFishingRodProps>;
export default LanFishingRod;
