import React from 'react';

export interface LanHouseTurretProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTurret(props: LanHouseTurretProps): React.ReactElement;
export default LanHouseTurret;
