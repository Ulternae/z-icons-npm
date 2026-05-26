import React from 'react';

export interface LanPersonSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSignSolid: React.FC<LanPersonSignSolidProps>;
export default LanPersonSignSolid;
