import React from 'react';

export interface LanHockeyStickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickSolid: React.FC<LanHockeyStickSolidProps>;
export default LanHockeyStickSolid;
