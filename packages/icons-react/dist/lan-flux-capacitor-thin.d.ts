import React from 'react';

export interface LanFluxCapacitorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluxCapacitorThin: React.FC<LanFluxCapacitorThinProps>;
export default LanFluxCapacitorThin;
