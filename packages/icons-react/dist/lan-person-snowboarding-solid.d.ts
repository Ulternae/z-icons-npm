import React from 'react';

export interface LanPersonSnowboardingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSnowboardingSolid: React.FC<LanPersonSnowboardingSolidProps>;
export default LanPersonSnowboardingSolid;
