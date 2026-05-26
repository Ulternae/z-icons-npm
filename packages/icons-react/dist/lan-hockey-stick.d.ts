import React from 'react';

export interface LanHockeyStickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStick: React.FC<LanHockeyStickProps>;
export default LanHockeyStick;
