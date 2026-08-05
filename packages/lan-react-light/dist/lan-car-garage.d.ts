import React from 'react';

export interface LanCarGarageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarGarage(props: LanCarGarageProps): React.ReactElement;
export default LanCarGarage;
