import React from 'react';

export interface LanBagSeedlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBagSeedling: React.FC<LanBagSeedlingProps>;
export default LanBagSeedling;
