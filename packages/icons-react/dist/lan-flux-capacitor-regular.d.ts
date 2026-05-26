import React from 'react';

export interface LanFluxCapacitorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluxCapacitorRegular: React.FC<LanFluxCapacitorRegularProps>;
export default LanFluxCapacitorRegular;
