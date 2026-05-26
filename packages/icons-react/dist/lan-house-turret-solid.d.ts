import React from 'react';

export interface LanHouseTurretSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTurretSolid: React.FC<LanHouseTurretSolidProps>;
export default LanHouseTurretSolid;
