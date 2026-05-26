import React from 'react';

export interface LanPersonBoothSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBoothSolid: React.FC<LanPersonBoothSolidProps>;
export default LanPersonBoothSolid;
