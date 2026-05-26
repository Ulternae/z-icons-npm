import React from 'react';

export interface LanDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDress: React.FC<LanDressProps>;
export default LanDress;
