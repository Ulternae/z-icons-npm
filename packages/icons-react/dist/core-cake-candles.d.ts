import React from 'react';

export interface CoreCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCakeCandles: React.FC<CoreCakeCandlesProps>;
export default CoreCakeCandles;
