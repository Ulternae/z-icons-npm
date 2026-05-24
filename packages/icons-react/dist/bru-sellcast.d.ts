import React from 'react';

export interface BruSellcastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSellcast: React.FC<BruSellcastProps>;
export default BruSellcast;
