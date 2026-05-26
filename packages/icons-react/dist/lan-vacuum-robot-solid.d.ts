import React from 'react';

export interface LanVacuumRobotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumRobotSolid: React.FC<LanVacuumRobotSolidProps>;
export default LanVacuumRobotSolid;
