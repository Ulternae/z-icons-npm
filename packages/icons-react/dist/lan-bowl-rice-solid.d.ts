import React from 'react';

export interface LanBowlRiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlRiceSolid: React.FC<LanBowlRiceSolidProps>;
export default LanBowlRiceSolid;
