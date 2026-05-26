import React from 'react';

export interface LanPersonHikingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHikingSolid: React.FC<LanPersonHikingSolidProps>;
export default LanPersonHikingSolid;
