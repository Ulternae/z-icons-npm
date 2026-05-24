import React from 'react';

export interface BruDebianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDebian: React.FC<BruDebianProps>;
export default BruDebian;
