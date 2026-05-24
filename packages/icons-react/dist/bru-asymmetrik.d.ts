import React from 'react';

export interface BruAsymmetrikProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAsymmetrik: React.FC<BruAsymmetrikProps>;
export default BruAsymmetrik;
