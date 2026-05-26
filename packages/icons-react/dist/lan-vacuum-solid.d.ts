import React from 'react';

export interface LanVacuumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumSolid: React.FC<LanVacuumSolidProps>;
export default LanVacuumSolid;
