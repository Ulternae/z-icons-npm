import React from 'react';

export interface LanApartmentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApartment(props: LanApartmentProps): React.ReactElement;
export default LanApartment;
