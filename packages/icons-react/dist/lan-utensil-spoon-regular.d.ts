import React from 'react';

export interface LanUtensilSpoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUtensilSpoonRegular: React.FC<LanUtensilSpoonRegularProps>;
export default LanUtensilSpoonRegular;
