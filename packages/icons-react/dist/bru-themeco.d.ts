import React from 'react';

export interface BruThemecoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruThemeco: React.FC<BruThemecoProps>;
export default BruThemeco;
