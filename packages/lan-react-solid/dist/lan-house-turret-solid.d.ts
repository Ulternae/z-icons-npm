import React from 'react';

export interface LanHouseTurretSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseTurretSolid(props: LanHouseTurretSolidProps): React.ReactElement;
export default LanHouseTurretSolid;
