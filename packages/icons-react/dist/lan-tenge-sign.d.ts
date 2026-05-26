import React from 'react';

export interface LanTengeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTengeSign: React.FC<LanTengeSignProps>;
export default LanTengeSign;
