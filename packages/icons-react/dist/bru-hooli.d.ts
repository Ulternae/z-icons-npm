import React from 'react';

export interface BruHooliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHooli: React.FC<BruHooliProps>;
export default BruHooli;
