import React from 'react';

export interface LanRobotAstromechProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRobotAstromech: React.FC<LanRobotAstromechProps>;
export default LanRobotAstromech;
