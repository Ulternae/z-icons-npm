import React from 'react';

export interface LanUserPoliceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPolice: React.FC<LanUserPoliceProps>;
export default LanUserPolice;
