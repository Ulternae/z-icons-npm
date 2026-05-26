import React from 'react';

export interface LanPersonMilitaryPointingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonMilitaryPointingSolid: React.FC<LanPersonMilitaryPointingSolidProps>;
export default LanPersonMilitaryPointingSolid;
