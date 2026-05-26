import React from 'react';

export interface LanSquarePeruvianSolesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePeruvianSoles: React.FC<LanSquarePeruvianSolesProps>;
export default LanSquarePeruvianSoles;
