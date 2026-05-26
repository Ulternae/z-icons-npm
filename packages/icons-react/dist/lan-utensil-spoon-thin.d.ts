import React from 'react';

export interface LanUtensilSpoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilSpoonThin: React.FC<LanUtensilSpoonThinProps>;
export default LanUtensilSpoonThin;
