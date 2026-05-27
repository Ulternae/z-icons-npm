import React from 'react';

export interface NeoBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookOpenSolid: React.FC<NeoBookOpenSolidProps>;
export default NeoBookOpenSolid;
