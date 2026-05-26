import React from 'react';

export interface LanPersonSwimmingPoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingPoolSolid: React.FC<LanPersonSwimmingPoolSolidProps>;
export default LanPersonSwimmingPoolSolid;
