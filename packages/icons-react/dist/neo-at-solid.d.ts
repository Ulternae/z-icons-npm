import React from 'react';

export interface NeoAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAtSolid: React.FC<NeoAtSolidProps>;
export default NeoAtSolid;
