import React from 'react';

export interface BruUpsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUps: React.FC<BruUpsProps>;
export default BruUps;
