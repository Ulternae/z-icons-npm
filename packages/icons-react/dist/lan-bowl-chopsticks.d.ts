import React from 'react';

export interface LanBowlChopsticksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlChopsticks: React.FC<LanBowlChopsticksProps>;
export default LanBowlChopsticks;
