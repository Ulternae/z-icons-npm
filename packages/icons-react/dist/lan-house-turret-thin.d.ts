import React from 'react';

export interface LanHouseTurretThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTurretThin: React.FC<LanHouseTurretThinProps>;
export default LanHouseTurretThin;
