import React from 'react';

export interface LanInfinityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInfinityThin: React.FC<LanInfinityThinProps>;
export default LanInfinityThin;
