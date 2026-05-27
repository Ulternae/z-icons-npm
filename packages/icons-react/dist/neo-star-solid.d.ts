import React from 'react';

export interface NeoStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStarSolid: React.FC<NeoStarSolidProps>;
export default NeoStarSolid;
