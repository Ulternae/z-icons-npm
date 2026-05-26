import React from 'react';

export interface LanIceCreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceCream: React.FC<LanIceCreamProps>;
export default LanIceCream;
