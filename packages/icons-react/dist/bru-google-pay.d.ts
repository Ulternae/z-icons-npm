import React from 'react';

export interface BruGooglePayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGooglePay: React.FC<BruGooglePayProps>;
export default BruGooglePay;
