import React from 'react';

export interface LanRadiationAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationAltThin: React.FC<LanRadiationAltThinProps>;
export default LanRadiationAltThin;
