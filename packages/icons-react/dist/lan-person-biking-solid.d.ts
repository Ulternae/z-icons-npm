import React from 'react';

export interface LanPersonBikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBikingSolid: React.FC<LanPersonBikingSolidProps>;
export default LanPersonBikingSolid;
