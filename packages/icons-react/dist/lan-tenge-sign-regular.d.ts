import React from 'react';

export interface LanTengeSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTengeSignRegular: React.FC<LanTengeSignRegularProps>;
export default LanTengeSignRegular;
