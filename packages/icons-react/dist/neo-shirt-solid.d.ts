import React from 'react';

export interface NeoShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShirtSolid: React.FC<NeoShirtSolidProps>;
export default NeoShirtSolid;
