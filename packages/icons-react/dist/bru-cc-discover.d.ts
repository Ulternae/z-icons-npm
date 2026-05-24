import React from 'react';

export interface BruCcDiscoverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCcDiscover: React.FC<BruCcDiscoverProps>;
export default BruCcDiscover;
