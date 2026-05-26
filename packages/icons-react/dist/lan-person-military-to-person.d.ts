import React from 'react';

export interface LanPersonMilitaryToPersonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonMilitaryToPerson: React.FC<LanPersonMilitaryToPersonProps>;
export default LanPersonMilitaryToPerson;
