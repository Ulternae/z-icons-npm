import React from 'react';

export interface LanPersonShelterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonShelterRegular(props: LanPersonShelterRegularProps): React.ReactElement;
export default LanPersonShelterRegular;
