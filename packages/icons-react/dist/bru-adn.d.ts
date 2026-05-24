import React from 'react';

export interface BruAdnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAdn: React.FC<BruAdnProps>;
export default BruAdn;
