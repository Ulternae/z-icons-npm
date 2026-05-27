import React from 'react';

export interface NeoMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMapSolid: React.FC<NeoMapSolidProps>;
export default NeoMapSolid;
