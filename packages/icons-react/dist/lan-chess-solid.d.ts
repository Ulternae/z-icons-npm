import React from 'react';

export interface LanChessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessSolid: React.FC<LanChessSolidProps>;
export default LanChessSolid;
