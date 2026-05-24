import React from 'react';

export interface BruAngularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAngular: React.FC<BruAngularProps>;
export default BruAngular;
