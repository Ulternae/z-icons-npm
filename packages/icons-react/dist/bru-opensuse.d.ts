import React from 'react';

export interface BruOpensuseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOpensuse: React.FC<BruOpensuseProps>;
export default BruOpensuse;
