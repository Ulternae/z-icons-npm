import React from 'react';

export interface NeoSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSunSolid: React.FC<NeoSunSolidProps>;
export default NeoSunSolid;
