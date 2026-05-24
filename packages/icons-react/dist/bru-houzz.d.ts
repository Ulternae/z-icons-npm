import React from 'react';

export interface BruHouzzProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHouzz: React.FC<BruHouzzProps>;
export default BruHouzz;
