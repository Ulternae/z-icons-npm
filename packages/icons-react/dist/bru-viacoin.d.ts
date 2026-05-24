import React from 'react';

export interface BruViacoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruViacoin: React.FC<BruViacoinProps>;
export default BruViacoin;
