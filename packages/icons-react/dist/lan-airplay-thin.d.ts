import React from 'react';

export interface LanAirplayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAirplayThin: React.FC<LanAirplayThinProps>;
export default LanAirplayThin;
