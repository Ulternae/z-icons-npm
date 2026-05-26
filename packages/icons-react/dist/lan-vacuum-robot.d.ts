import React from 'react';

export interface LanVacuumRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumRobot: React.FC<LanVacuumRobotProps>;
export default LanVacuumRobot;
