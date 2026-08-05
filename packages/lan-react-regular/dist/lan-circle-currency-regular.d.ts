import React from 'react';

export interface LanCircleCurrencyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCurrencyRegular(props: LanCircleCurrencyRegularProps): React.ReactElement;
export default LanCircleCurrencyRegular;
