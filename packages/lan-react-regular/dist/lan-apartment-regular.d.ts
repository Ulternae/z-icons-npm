import React from 'react';

export interface LanApartmentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanApartmentRegular(props: LanApartmentRegularProps): React.ReactElement;
export default LanApartmentRegular;
