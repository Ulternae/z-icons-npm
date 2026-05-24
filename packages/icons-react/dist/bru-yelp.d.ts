import React from 'react';

export interface BruYelpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYelp: React.FC<BruYelpProps>;
export default BruYelp;
