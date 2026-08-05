import React from 'react';

export interface LanCurrencySignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurrencySignThin(props: LanCurrencySignThinProps): React.ReactElement;
export default LanCurrencySignThin;
