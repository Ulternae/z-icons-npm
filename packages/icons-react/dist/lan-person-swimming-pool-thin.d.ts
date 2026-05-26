import React from 'react';

export interface LanPersonSwimmingPoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingPoolThin: React.FC<LanPersonSwimmingPoolThinProps>;
export default LanPersonSwimmingPoolThin;
