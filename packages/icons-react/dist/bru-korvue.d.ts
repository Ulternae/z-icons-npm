import React from 'react';

export interface BruKorvueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKorvue: React.FC<BruKorvueProps>;
export default BruKorvue;
