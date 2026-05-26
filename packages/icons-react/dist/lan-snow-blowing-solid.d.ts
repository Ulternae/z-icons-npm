import React from 'react';

export interface LanSnowBlowingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnowBlowingSolid: React.FC<LanSnowBlowingSolidProps>;
export default LanSnowBlowingSolid;
