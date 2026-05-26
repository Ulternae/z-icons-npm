import React from 'react';

export interface LanChemexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChemex: React.FC<LanChemexProps>;
export default LanChemex;
