import React from 'react';

export interface NeoEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEqualsSolid: React.FC<NeoEqualsSolidProps>;
export default NeoEqualsSolid;
