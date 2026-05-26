import React from 'react';

export interface LanVentDamperSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVentDamperSolid: React.FC<LanVentDamperSolidProps>;
export default LanVentDamperSolid;
