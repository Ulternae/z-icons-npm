import React from 'react';

export interface BruPaypalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPaypal: React.FC<BruPaypalProps>;
export default BruPaypal;
