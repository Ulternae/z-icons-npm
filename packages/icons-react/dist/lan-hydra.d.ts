import React from 'react';

export interface LanHydraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHydra: React.FC<LanHydraProps>;
export default LanHydra;
