import React from 'react';

export interface BruKoFiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKoFi: React.FC<BruKoFiProps>;
export default BruKoFi;
