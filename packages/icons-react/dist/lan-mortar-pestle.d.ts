import React from 'react';

export interface LanMortarPestleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarPestle: React.FC<LanMortarPestleProps>;
export default LanMortarPestle;
