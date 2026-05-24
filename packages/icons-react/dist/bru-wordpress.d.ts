import React from 'react';

export interface BruWordpressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWordpress: React.FC<BruWordpressProps>;
export default BruWordpress;
