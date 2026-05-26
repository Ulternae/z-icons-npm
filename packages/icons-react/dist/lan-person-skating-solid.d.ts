import React from 'react';

export interface LanPersonSkatingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkatingSolid: React.FC<LanPersonSkatingSolidProps>;
export default LanPersonSkatingSolid;
