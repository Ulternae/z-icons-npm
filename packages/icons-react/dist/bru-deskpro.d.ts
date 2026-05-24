import React from 'react';

export interface BruDeskproProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDeskpro: React.FC<BruDeskproProps>;
export default BruDeskpro;
