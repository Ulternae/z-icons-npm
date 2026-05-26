import React from 'react';

export interface LanFamilyDressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilyDressSolid: React.FC<LanFamilyDressSolidProps>;
export default LanFamilyDressSolid;
