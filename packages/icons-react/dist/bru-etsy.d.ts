import React from 'react';

export interface BruEtsyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEtsy: React.FC<BruEtsyProps>;
export default BruEtsy;
