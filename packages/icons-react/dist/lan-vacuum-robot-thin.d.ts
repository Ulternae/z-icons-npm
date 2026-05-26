import React from 'react';

export interface LanVacuumRobotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumRobotThin: React.FC<LanVacuumRobotThinProps>;
export default LanVacuumRobotThin;
