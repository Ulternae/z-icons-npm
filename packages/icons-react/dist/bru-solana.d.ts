import React from 'react';

export interface BruSolanaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSolana: React.FC<BruSolanaProps>;
export default BruSolana;
