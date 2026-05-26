import React from 'react';

export interface LanPersonSwimmingPoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingPool: React.FC<LanPersonSwimmingPoolProps>;
export default LanPersonSwimmingPool;
