import React from 'react';

export interface BruUberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUber: React.FC<BruUberProps>;
export default BruUber;
