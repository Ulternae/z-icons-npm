import React from 'react';

export interface LanVacuumRobotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVacuumRobot(props: LanVacuumRobotProps): React.ReactElement;
export default LanVacuumRobot;
