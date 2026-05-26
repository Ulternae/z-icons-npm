import React from 'react';

export interface LanHockeyPuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyPuckSolid: React.FC<LanHockeyPuckSolidProps>;
export default LanHockeyPuckSolid;
