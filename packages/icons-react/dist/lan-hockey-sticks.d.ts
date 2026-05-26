import React from 'react';

export interface LanHockeySticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHockeySticks: React.FC<LanHockeySticksProps>;
export default LanHockeySticks;
