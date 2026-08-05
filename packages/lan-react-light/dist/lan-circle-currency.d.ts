import React from 'react';

export interface LanCircleCurrencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCurrency(props: LanCircleCurrencyProps): React.ReactElement;
export default LanCircleCurrency;
