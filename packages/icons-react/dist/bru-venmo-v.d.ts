import React from 'react';

export interface BruVenmoVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVenmoV: React.FC<BruVenmoVProps>;
export default BruVenmoV;
