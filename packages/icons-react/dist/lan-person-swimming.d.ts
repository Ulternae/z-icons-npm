import React from 'react';

export interface LanPersonSwimmingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimming: React.FC<LanPersonSwimmingProps>;
export default LanPersonSwimming;
