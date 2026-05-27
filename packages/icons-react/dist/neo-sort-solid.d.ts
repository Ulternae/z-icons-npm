import React from 'react';

export interface NeoSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSortSolid: React.FC<NeoSortSolidProps>;
export default NeoSortSolid;
