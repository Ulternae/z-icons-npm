import React from 'react';

export interface BruApplePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruApplePay: React.FC<BruApplePayProps>;
export default BruApplePay;
