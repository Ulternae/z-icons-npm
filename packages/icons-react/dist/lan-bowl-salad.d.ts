import React from 'react';

export interface LanBowlSaladProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSalad: React.FC<LanBowlSaladProps>;
export default LanBowlSalad;
