import React from 'react';

export interface LanBoxOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenSolid: React.FC<LanBoxOpenSolidProps>;
export default LanBoxOpenSolid;
