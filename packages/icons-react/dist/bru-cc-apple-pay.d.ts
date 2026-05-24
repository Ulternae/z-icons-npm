import React from 'react';

export interface BruCcApplePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcApplePay: React.FC<BruCcApplePayProps>;
export default BruCcApplePay;
