import React from 'react';

export interface BruJuliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJulia: React.FC<BruJuliaProps>;
export default BruJulia;
