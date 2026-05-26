import React from 'react';

export interface LanPersonWavingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWavingSolid: React.FC<LanPersonWavingSolidProps>;
export default LanPersonWavingSolid;
