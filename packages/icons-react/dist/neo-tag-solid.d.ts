import React from 'react';

export interface NeoTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTagSolid: React.FC<NeoTagSolidProps>;
export default NeoTagSolid;
