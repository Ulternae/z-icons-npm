import React from 'react';

export interface LanPersonSleddingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSleddingSolid: React.FC<LanPersonSleddingSolidProps>;
export default LanPersonSleddingSolid;
