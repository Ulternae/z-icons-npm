import React from 'react';

export interface BruApplePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruApplePay(props: BruApplePayProps): React.ReactElement;
export default BruApplePay;
