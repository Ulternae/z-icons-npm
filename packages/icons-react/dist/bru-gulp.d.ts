import React from 'react';

export interface BruGulpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGulp: React.FC<BruGulpProps>;
export default BruGulp;
