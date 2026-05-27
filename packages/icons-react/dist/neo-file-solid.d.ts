import React from 'react';

export interface NeoFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFileSolid: React.FC<NeoFileSolidProps>;
export default NeoFileSolid;
