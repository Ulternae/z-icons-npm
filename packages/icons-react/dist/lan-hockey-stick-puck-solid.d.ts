import React from 'react';

export interface LanHockeyStickPuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickPuckSolid: React.FC<LanHockeyStickPuckSolidProps>;
export default LanHockeyStickPuckSolid;
