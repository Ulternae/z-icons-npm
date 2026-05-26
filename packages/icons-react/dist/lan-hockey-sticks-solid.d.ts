import React from 'react';

export interface LanHockeySticksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeySticksSolid: React.FC<LanHockeySticksSolidProps>;
export default LanHockeySticksSolid;
