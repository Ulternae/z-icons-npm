import React from 'react';

export interface BruElementorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruElementor: React.FC<BruElementorProps>;
export default BruElementor;
