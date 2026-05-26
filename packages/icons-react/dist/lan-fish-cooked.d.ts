import React from 'react';

export interface LanFishCookedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishCooked: React.FC<LanFishCookedProps>;
export default LanFishCooked;
