import React from 'react';

export interface BruSquareBehanceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareBehance: React.FC<BruSquareBehanceProps>;
export default BruSquareBehance;
