import React from 'react';

export interface BruBandcampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBandcamp: React.FC<BruBandcampProps>;
export default BruBandcamp;
