import React from 'react';

export interface LanVacuumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuumSolid(props: LanVacuumSolidProps): React.ReactElement;
export default LanVacuumSolid;
