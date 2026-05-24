import React from 'react';

export interface BruPalfedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPalfed: React.FC<BruPalfedProps>;
export default BruPalfed;
