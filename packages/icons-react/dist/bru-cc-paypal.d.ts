import React from 'react';

export interface BruCcPaypalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcPaypal: React.FC<BruCcPaypalProps>;
export default BruCcPaypal;
