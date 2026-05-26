import React from 'react';

export interface LanHouseTurretRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseTurretRegular: React.FC<LanHouseTurretRegularProps>;
export default LanHouseTurretRegular;
