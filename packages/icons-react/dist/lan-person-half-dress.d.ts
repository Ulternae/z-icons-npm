import React from 'react';

export interface LanPersonHalfDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHalfDress: React.FC<LanPersonHalfDressProps>;
export default LanPersonHalfDress;
