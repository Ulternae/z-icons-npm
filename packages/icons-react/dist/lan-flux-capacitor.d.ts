import React from 'react';

export interface LanFluxCapacitorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFluxCapacitor: React.FC<LanFluxCapacitorProps>;
export default LanFluxCapacitor;
