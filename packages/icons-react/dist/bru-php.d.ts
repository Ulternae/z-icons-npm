import React from 'react';

export interface BruPhpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPhp: React.FC<BruPhpProps>;
export default BruPhp;
