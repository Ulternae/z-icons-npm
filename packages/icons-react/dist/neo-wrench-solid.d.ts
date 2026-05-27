import React from 'react';

export interface NeoWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWrenchSolid: React.FC<NeoWrenchSolidProps>;
export default NeoWrenchSolid;
