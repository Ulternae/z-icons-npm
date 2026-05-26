import React from 'react';

export interface LanPeruvianSolesSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeruvianSolesSign: React.FC<LanPeruvianSolesSignProps>;
export default LanPeruvianSolesSign;
