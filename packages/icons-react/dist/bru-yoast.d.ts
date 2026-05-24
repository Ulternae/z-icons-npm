import React from 'react';

export interface BruYoastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYoast: React.FC<BruYoastProps>;
export default BruYoast;
