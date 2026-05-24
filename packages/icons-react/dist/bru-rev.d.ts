import React from 'react';

export interface BruRevProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRev: React.FC<BruRevProps>;
export default BruRev;
