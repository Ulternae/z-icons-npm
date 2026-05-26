import React from 'react';

export interface LanFishThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishThin: React.FC<LanFishThinProps>;
export default LanFishThin;
