import React from 'react';

export interface NeoMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMobileSolid: React.FC<NeoMobileSolidProps>;
export default NeoMobileSolid;
