import React from 'react';

export interface LanFishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFish: React.FC<LanFishProps>;
export default LanFish;
