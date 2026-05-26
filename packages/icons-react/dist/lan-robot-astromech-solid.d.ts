import React from 'react';

export interface LanRobotAstromechSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobotAstromechSolid: React.FC<LanRobotAstromechSolidProps>;
export default LanRobotAstromechSolid;
