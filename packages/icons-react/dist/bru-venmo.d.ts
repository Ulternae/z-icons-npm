import React from 'react';

export interface BruVenmoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVenmo: React.FC<BruVenmoProps>;
export default BruVenmo;
