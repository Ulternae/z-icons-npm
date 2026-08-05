import React from 'react';

export interface LanSquareCurrencyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCurrencyRegular(props: LanSquareCurrencyRegularProps): React.ReactElement;
export default LanSquareCurrencyRegular;
