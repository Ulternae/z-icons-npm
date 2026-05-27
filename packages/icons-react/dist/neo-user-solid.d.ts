import React from 'react';

export interface NeoUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUserSolid: React.FC<NeoUserSolidProps>;
export default NeoUserSolid;
