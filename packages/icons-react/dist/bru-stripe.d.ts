import React from 'react';

export interface BruStripeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStripe: React.FC<BruStripeProps>;
export default BruStripe;
