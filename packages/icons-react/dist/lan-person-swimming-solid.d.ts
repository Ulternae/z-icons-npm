import React from 'react';

export interface LanPersonSwimmingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSwimmingSolid: React.FC<LanPersonSwimmingSolidProps>;
export default LanPersonSwimmingSolid;
