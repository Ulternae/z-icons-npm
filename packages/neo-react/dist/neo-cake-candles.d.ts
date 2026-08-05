import React from 'react';

export interface NeoCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCakeCandles(props: NeoCakeCandlesProps): React.ReactElement;
export default NeoCakeCandles;
