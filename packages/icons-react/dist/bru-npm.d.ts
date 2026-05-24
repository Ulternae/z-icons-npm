import React from 'react';

export interface BruNpmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNpm: React.FC<BruNpmProps>;
export default BruNpm;
