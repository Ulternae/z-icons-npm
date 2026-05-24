import React from 'react';

export interface BruHotjarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHotjar: React.FC<BruHotjarProps>;
export default BruHotjar;
