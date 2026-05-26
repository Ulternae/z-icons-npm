import React from 'react';

export interface LanHollyBerrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHollyBerrySolid: React.FC<LanHollyBerrySolidProps>;
export default LanHollyBerrySolid;
