import React from 'react';

export interface BruWordpressSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWordpressSimple: React.FC<BruWordpressSimpleProps>;
export default BruWordpressSimple;
