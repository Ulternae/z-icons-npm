import React from 'react';

export interface LanHockeyStickPuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyStickPuckSolid(props: LanHockeyStickPuckSolidProps): React.ReactElement;
export default LanHockeyStickPuckSolid;
