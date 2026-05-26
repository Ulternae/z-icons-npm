import React from 'react';

export interface LanCaduceusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaduceusSolid: React.FC<LanCaduceusSolidProps>;
export default LanCaduceusSolid;
