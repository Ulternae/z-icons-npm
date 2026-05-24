import React from 'react';

export interface BruStripeSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruStripeS: React.FC<BruStripeSProps>;
export default BruStripeS;
