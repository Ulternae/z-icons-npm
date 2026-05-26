import React from 'react';

export interface LanTengeSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTengeSignSolid: React.FC<LanTengeSignSolidProps>;
export default LanTengeSignSolid;
