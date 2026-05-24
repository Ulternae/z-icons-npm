import React from 'react';

export interface BruSquareViadeoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareViadeo: React.FC<BruSquareViadeoProps>;
export default BruSquareViadeo;
