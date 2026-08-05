import React from 'react';

export interface LanHockeyPuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHockeyPuckSolid(props: LanHockeyPuckSolidProps): React.ReactElement;
export default LanHockeyPuckSolid;
