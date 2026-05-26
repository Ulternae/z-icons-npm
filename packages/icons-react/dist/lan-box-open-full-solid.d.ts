import React from 'react';

export interface LanBoxOpenFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenFullSolid: React.FC<LanBoxOpenFullSolidProps>;
export default LanBoxOpenFullSolid;
