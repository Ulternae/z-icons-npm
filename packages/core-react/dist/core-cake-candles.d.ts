import React from 'react';

export interface CoreCakeCandlesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCakeCandles(props: CoreCakeCandlesProps): React.ReactElement;
export default CoreCakeCandles;
