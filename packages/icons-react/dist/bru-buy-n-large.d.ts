import React from 'react';

export interface BruBuyNLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBuyNLarge: React.FC<BruBuyNLargeProps>;
export default BruBuyNLarge;
