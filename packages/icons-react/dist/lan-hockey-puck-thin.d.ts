import React from 'react';

export interface LanHockeyPuckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeyPuckThin: React.FC<LanHockeyPuckThinProps>;
export default LanHockeyPuckThin;
