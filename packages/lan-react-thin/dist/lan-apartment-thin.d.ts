import React from 'react';

export interface LanApartmentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApartmentThin(props: LanApartmentThinProps): React.ReactElement;
export default LanApartmentThin;
