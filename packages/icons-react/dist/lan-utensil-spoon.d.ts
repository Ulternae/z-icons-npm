import React from 'react';

export interface LanUtensilSpoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilSpoon: React.FC<LanUtensilSpoonProps>;
export default LanUtensilSpoon;
