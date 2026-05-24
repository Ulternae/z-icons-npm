import React from 'react';

export interface BruProductHuntProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruProductHunt: React.FC<BruProductHuntProps>;
export default BruProductHunt;
