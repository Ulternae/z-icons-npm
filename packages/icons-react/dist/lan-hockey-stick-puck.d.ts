import React from 'react';

export interface LanHockeyStickPuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickPuck: React.FC<LanHockeyStickPuckProps>;
export default LanHockeyStickPuck;
