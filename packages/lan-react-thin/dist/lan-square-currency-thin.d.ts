import React from 'react';

export interface LanSquareCurrencyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCurrencyThin(props: LanSquareCurrencyThinProps): React.ReactElement;
export default LanSquareCurrencyThin;
