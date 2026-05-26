import React from 'react';

export interface LanApartmentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApartmentRegular: React.FC<LanApartmentRegularProps>;
export default LanApartmentRegular;
