import React from 'react';

export interface LanWindTurbineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindTurbine: React.FC<LanWindTurbineProps>;
export default LanWindTurbine;
