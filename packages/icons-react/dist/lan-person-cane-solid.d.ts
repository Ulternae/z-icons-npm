import React from 'react';

export interface LanPersonCaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCaneSolid: React.FC<LanPersonCaneSolidProps>;
export default LanPersonCaneSolid;
