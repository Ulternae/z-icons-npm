import React from 'react';

export interface LanApartmentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApartment: React.FC<LanApartmentProps>;
export default LanApartment;
