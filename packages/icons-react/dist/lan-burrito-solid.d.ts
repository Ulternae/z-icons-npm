import React from 'react';

export interface LanBurritoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurritoSolid: React.FC<LanBurritoSolidProps>;
export default LanBurritoSolid;
