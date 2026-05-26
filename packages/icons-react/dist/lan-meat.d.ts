import React from 'react';

export interface LanMeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeat: React.FC<LanMeatProps>;
export default LanMeat;
