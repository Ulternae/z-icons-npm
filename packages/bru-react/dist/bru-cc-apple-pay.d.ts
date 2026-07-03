import React from 'react';

export interface BruCcApplePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCcApplePay(props: BruCcApplePayProps): React.ReactElement;
export default BruCcApplePay;
