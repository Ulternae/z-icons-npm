import React from 'react';

export interface NeoTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTreeSolid: React.FC<NeoTreeSolidProps>;
export default NeoTreeSolid;
