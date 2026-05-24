import React from 'react';

export interface BruCanadianMapleLeafProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCanadianMapleLeaf: React.FC<BruCanadianMapleLeafProps>;
export default BruCanadianMapleLeaf;
