import React from 'react';

export interface LanPersonDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDress: React.FC<LanPersonDressProps>;
export default LanPersonDress;
