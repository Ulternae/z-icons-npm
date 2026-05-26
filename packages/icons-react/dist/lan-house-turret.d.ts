import React from 'react';

export interface LanHouseTurretProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTurret: React.FC<LanHouseTurretProps>;
export default LanHouseTurret;
