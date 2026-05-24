import React from 'react';

export interface BruDeliciousProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDelicious: React.FC<BruDeliciousProps>;
export default BruDelicious;
