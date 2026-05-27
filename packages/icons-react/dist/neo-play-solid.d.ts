import React from 'react';

export interface NeoPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlaySolid: React.FC<NeoPlaySolidProps>;
export default NeoPlaySolid;
