import React from 'react';

export interface LanGarageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarage(props: LanGarageProps): React.ReactElement;
export default LanGarage;
