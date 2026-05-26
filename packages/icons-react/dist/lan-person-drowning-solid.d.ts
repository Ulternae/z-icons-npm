import React from 'react';

export interface LanPersonDrowningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDrowningSolid: React.FC<LanPersonDrowningSolidProps>;
export default LanPersonDrowningSolid;
