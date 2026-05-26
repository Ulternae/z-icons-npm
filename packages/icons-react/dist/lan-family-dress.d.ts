import React from 'react';

export interface LanFamilyDressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyDress: React.FC<LanFamilyDressProps>;
export default LanFamilyDress;
