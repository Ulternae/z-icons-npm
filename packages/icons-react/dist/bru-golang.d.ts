import React from 'react';

export interface BruGolangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGolang: React.FC<BruGolangProps>;
export default BruGolang;
