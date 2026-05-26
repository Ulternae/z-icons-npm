import React from 'react';

export interface LanGuitarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarSolid: React.FC<LanGuitarSolidProps>;
export default LanGuitarSolid;
