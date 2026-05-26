import React from 'react';

export interface LanBeerMugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBeerMugSolid: React.FC<LanBeerMugSolidProps>;
export default LanBeerMugSolid;
