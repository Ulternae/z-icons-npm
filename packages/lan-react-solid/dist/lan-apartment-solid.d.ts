import React from 'react';

export interface LanApartmentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApartmentSolid(props: LanApartmentSolidProps): React.ReactElement;
export default LanApartmentSolid;
