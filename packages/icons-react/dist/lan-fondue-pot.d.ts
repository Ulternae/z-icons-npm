import React from 'react';

export interface LanFonduePotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFonduePot: React.FC<LanFonduePotProps>;
export default LanFonduePot;
