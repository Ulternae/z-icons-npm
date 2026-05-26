import React from 'react';

export interface LanRadiationThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationThin: React.FC<LanRadiationThinProps>;
export default LanRadiationThin;
