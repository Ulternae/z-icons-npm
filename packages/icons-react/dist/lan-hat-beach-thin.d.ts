import React from 'react';

export interface LanHatBeachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatBeachThin: React.FC<LanHatBeachThinProps>;
export default LanHatBeachThin;
