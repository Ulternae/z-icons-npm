import React from 'react';

export interface LanSprinklerCeilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprinklerCeilingSolid: React.FC<LanSprinklerCeilingSolidProps>;
export default LanSprinklerCeilingSolid;
