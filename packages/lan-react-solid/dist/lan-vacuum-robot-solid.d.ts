import React from 'react';

export interface LanVacuumRobotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuumRobotSolid(props: LanVacuumRobotSolidProps): React.ReactElement;
export default LanVacuumRobotSolid;
