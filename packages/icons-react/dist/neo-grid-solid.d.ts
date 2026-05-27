import React from 'react';

export interface NeoGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGridSolid: React.FC<NeoGridSolidProps>;
export default NeoGridSolid;
