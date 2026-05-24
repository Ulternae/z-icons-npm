import React from 'react';

export interface BruBuyselladsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBuysellads: React.FC<BruBuyselladsProps>;
export default BruBuysellads;
