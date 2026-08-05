import React from 'react';

export interface LanCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeCandles(props: LanCakeCandlesProps): React.ReactElement;
export default LanCakeCandles;
