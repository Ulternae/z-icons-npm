import React from 'react';

export interface LanInhalerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInhalerSolid: React.FC<LanInhalerSolidProps>;
export default LanInhalerSolid;
