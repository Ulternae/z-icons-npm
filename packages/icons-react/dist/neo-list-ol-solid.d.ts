import React from 'react';

export interface NeoListOlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoListOlSolid: React.FC<NeoListOlSolidProps>;
export default NeoListOlSolid;
