import React from 'react';

export interface BruEmberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEmber: React.FC<BruEmberProps>;
export default BruEmber;
