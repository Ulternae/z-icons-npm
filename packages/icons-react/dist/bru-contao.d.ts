import React from 'react';

export interface BruContaoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruContao: React.FC<BruContaoProps>;
export default BruContao;
