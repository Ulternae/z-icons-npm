import React from 'react';

export interface BruCcStripeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcStripe: React.FC<BruCcStripeProps>;
export default BruCcStripe;
