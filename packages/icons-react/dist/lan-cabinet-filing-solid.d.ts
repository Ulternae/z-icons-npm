import React from 'react';

export interface LanCabinetFilingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCabinetFilingSolid: React.FC<LanCabinetFilingSolidProps>;
export default LanCabinetFilingSolid;
