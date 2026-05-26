import React from 'react';

export interface LanAcornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAcornSolid: React.FC<LanAcornSolidProps>;
export default LanAcornSolid;
