import React from 'react';

export interface LanRobotAstromechSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobotAstromechSolid(props: LanRobotAstromechSolidProps): React.ReactElement;
export default LanRobotAstromechSolid;
