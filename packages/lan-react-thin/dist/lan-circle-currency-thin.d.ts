import React from 'react';

export interface LanCircleCurrencyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCurrencyThin(props: LanCircleCurrencyThinProps): React.ReactElement;
export default LanCircleCurrencyThin;
