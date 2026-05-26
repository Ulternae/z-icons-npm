import React from 'react';

export interface LanChairOfficeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairOfficeRegular: React.FC<LanChairOfficeRegularProps>;
export default LanChairOfficeRegular;
