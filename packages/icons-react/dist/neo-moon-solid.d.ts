import React from 'react';

export interface NeoMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMoonSolid: React.FC<NeoMoonSolidProps>;
export default NeoMoonSolid;
