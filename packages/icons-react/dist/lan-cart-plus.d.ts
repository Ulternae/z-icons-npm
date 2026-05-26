import React from 'react';

export interface LanCartPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartPlus: React.FC<LanCartPlusProps>;
export default LanCartPlus;
