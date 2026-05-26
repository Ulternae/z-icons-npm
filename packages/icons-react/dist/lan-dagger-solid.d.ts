import React from 'react';

export interface LanDaggerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDaggerSolid: React.FC<LanDaggerSolidProps>;
export default LanDaggerSolid;
