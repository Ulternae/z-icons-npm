import React from 'react';

export interface BruItunesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruItunes: React.FC<BruItunesProps>;
export default BruItunes;
