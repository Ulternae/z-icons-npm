import React from 'react';

export interface LanCurrencySignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurrencySign(props: LanCurrencySignProps): React.ReactElement;
export default LanCurrencySign;
