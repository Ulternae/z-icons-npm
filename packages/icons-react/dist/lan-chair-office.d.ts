import React from 'react';

export interface LanChairOfficeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairOffice: React.FC<LanChairOfficeProps>;
export default LanChairOffice;
