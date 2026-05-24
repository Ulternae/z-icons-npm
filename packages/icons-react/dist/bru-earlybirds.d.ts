import React from 'react';

export interface BruEarlybirdsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEarlybirds: React.FC<BruEarlybirdsProps>;
export default BruEarlybirds;
