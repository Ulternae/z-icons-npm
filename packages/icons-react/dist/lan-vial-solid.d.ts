import React from 'react';

export interface LanVialSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialSolid: React.FC<LanVialSolidProps>;
export default LanVialSolid;
