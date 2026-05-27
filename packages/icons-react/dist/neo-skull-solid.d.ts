import React from 'react';

export interface NeoSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSkullSolid: React.FC<NeoSkullSolidProps>;
export default NeoSkullSolid;
