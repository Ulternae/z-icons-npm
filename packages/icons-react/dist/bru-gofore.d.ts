import React from 'react';

export interface BruGoforeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGofore: React.FC<BruGoforeProps>;
export default BruGofore;
