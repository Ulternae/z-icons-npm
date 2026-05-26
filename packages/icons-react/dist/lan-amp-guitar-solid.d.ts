import React from 'react';

export interface LanAmpGuitarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpGuitarSolid: React.FC<LanAmpGuitarSolidProps>;
export default LanAmpGuitarSolid;
