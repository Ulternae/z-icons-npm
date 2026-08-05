import React from 'react';

export interface LanCarSirenOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSirenOnRegular(props: LanCarSirenOnRegularProps): React.ReactElement;
export default LanCarSirenOnRegular;
