import React from 'react';

export interface LanHockeyPuckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyPuck: React.FC<LanHockeyPuckProps>;
export default LanHockeyPuck;
