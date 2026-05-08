import React from 'react';

export interface MinaScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaScissorsSolid: React.FC<MinaScissorsSolidProps>;
export default MinaScissorsSolid;
