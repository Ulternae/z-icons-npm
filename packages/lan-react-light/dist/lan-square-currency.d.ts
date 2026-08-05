import React from 'react';

export interface LanSquareCurrencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCurrency(props: LanSquareCurrencyProps): React.ReactElement;
export default LanSquareCurrency;
