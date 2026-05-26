import React from 'react';

export interface LanChopsticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChopsticks: React.FC<LanChopsticksProps>;
export default LanChopsticks;
