import React from 'react';

export interface LanFluxCapacitorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluxCapacitorSolid: React.FC<LanFluxCapacitorSolidProps>;
export default LanFluxCapacitorSolid;
