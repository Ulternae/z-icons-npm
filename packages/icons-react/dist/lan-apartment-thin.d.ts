import React from 'react';

export interface LanApartmentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApartmentThin: React.FC<LanApartmentThinProps>;
export default LanApartmentThin;
