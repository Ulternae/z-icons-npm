import React from 'react';

export interface LanBowlSpoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSpoon: React.FC<LanBowlSpoonProps>;
export default LanBowlSpoon;
