import React from 'react';

export interface LanGearApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearApiThin: React.FC<LanGearApiThinProps>;
export default LanGearApiThin;
