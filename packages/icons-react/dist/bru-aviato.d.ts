import React from 'react';

export interface BruAviatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAviato: React.FC<BruAviatoProps>;
export default BruAviato;
