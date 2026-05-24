import React from 'react';

export interface BruSquareDeskproProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareDeskpro: React.FC<BruSquareDeskproProps>;
export default BruSquareDeskpro;
