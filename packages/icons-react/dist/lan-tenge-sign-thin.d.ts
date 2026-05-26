import React from 'react';

export interface LanTengeSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTengeSignThin: React.FC<LanTengeSignThinProps>;
export default LanTengeSignThin;
