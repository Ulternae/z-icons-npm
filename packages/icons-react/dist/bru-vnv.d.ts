import React from 'react';

export interface BruVnvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVnv: React.FC<BruVnvProps>;
export default BruVnv;
