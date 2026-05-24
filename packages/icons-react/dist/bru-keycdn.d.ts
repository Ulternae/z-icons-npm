import React from 'react';

export interface BruKeycdnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKeycdn: React.FC<BruKeycdnProps>;
export default BruKeycdn;
