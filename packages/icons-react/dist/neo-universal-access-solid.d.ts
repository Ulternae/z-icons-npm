import React from 'react';

export interface NeoUniversalAccessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUniversalAccessSolid: React.FC<NeoUniversalAccessSolidProps>;
export default NeoUniversalAccessSolid;
