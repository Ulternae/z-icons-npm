import React from 'react';

export interface LanVentDamperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVentDamper: React.FC<LanVentDamperProps>;
export default LanVentDamper;
