import React from 'react';

export interface BruAirbnbProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAirbnb: React.FC<BruAirbnbProps>;
export default BruAirbnb;
