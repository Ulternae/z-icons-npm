import React from 'react';

export interface BruTypo3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTypo3: React.FC<BruTypo3Props>;
export default BruTypo3;
