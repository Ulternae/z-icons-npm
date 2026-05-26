import React from 'react';

export interface LanVentDamperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVentDamperThin: React.FC<LanVentDamperThinProps>;
export default LanVentDamperThin;
