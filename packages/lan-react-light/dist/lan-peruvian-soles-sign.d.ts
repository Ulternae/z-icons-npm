import React from 'react';

export interface LanPeruvianSolesSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeruvianSolesSign(props: LanPeruvianSolesSignProps): React.ReactElement;
export default LanPeruvianSolesSign;
