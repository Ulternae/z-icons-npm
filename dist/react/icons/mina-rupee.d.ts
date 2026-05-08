import React from 'react';

export interface MinaRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupee: React.FC<MinaRupeeProps>;
export default MinaRupee;
