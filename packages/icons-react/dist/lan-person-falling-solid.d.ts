import React from 'react';

export interface LanPersonFallingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFallingSolid: React.FC<LanPersonFallingSolidProps>;
export default LanPersonFallingSolid;
