import React from 'react';

export interface BruFirefoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFirefox: React.FC<BruFirefoxProps>;
export default BruFirefox;
