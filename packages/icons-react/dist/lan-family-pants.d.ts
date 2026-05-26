import React from 'react';

export interface LanFamilyPantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyPants: React.FC<LanFamilyPantsProps>;
export default LanFamilyPants;
