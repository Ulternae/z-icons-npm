import React from 'react';

export interface LanRobotAstromechProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRobotAstromech(props: LanRobotAstromechProps): React.ReactElement;
export default LanRobotAstromech;
