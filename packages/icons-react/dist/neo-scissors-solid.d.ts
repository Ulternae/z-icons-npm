import React from 'react';

export interface NeoScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoScissorsSolid: React.FC<NeoScissorsSolidProps>;
export default NeoScissorsSolid;
