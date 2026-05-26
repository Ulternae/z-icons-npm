import React from 'react';

export interface LanPersonDiggingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDiggingSolid: React.FC<LanPersonDiggingSolidProps>;
export default LanPersonDiggingSolid;
