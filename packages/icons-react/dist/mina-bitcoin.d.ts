import React from 'react';

export interface MinaBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoin: React.FC<MinaBitcoinProps>;
export default MinaBitcoin;
