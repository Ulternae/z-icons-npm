import React from 'react';

export interface LanRobotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobotSolid: React.FC<LanRobotSolidProps>;
export default LanRobotSolid;
