import React from 'react';

export interface LanHockeyStickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyStickThin: React.FC<LanHockeyStickThinProps>;
export default LanHockeyStickThin;
