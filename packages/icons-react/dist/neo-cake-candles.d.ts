import React from 'react';

export interface NeoCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCakeCandles: React.FC<NeoCakeCandlesProps>;
export default NeoCakeCandles;
