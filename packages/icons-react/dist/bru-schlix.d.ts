import React from 'react';

export interface BruSchlixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSchlix: React.FC<BruSchlixProps>;
export default BruSchlix;
