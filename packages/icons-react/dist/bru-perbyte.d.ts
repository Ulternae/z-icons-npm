import React from 'react';

export interface BruPerbyteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPerbyte: React.FC<BruPerbyteProps>;
export default BruPerbyte;
