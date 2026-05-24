import React from 'react';

export interface BruFlyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFly: React.FC<BruFlyProps>;
export default BruFly;
