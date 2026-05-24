import React from 'react';

export interface BruIdealProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruIdeal: React.FC<BruIdealProps>;
export default BruIdeal;
