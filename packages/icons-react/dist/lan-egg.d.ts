import React from 'react';

export interface LanEggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEgg: React.FC<LanEggProps>;
export default LanEgg;
