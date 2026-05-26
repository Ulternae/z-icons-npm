import React from 'react';

export interface LanVentDamperRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVentDamperRegular: React.FC<LanVentDamperRegularProps>;
export default LanVentDamperRegular;
