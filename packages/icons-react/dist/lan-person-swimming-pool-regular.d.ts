import React from 'react';

export interface LanPersonSwimmingPoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingPoolRegular: React.FC<LanPersonSwimmingPoolRegularProps>;
export default LanPersonSwimmingPoolRegular;
