import React from 'react';

export interface BruSithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSith: React.FC<BruSithProps>;
export default BruSith;
