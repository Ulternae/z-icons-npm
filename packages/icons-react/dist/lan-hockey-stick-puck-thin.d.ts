import React from 'react';

export interface LanHockeyStickPuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickPuckThin: React.FC<LanHockeyStickPuckThinProps>;
export default LanHockeyStickPuckThin;
