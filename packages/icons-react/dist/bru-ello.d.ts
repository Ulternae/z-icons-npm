import React from 'react';

export interface BruElloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruEllo: React.FC<BruElloProps>;
export default BruEllo;
