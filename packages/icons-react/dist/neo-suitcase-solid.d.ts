import React from 'react';

export interface NeoSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSuitcaseSolid: React.FC<NeoSuitcaseSolidProps>;
export default NeoSuitcaseSolid;
