import React from 'react';

export interface BruThemeisleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruThemeisle: React.FC<BruThemeisleProps>;
export default BruThemeisle;
