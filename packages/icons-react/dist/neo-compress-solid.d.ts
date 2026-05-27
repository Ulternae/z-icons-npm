import React from 'react';

export interface NeoCompressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCompressSolid: React.FC<NeoCompressSolidProps>;
export default NeoCompressSolid;
