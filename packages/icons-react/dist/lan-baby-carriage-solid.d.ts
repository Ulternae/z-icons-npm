import React from 'react';

export interface LanBabyCarriageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBabyCarriageSolid: React.FC<LanBabyCarriageSolidProps>;
export default LanBabyCarriageSolid;
