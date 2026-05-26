import React from 'react';

export interface LanPersonSkiingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSkiingSolid: React.FC<LanPersonSkiingSolidProps>;
export default LanPersonSkiingSolid;
