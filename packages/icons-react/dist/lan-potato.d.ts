import React from 'react';

export interface LanPotatoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotato: React.FC<LanPotatoProps>;
export default LanPotato;
