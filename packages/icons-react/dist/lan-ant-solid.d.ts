import React from 'react';

export interface LanAntSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAntSolid: React.FC<LanAntSolidProps>;
export default LanAntSolid;
