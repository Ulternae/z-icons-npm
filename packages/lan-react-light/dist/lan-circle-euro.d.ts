import React from 'react';

export interface LanCircleEuroProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEuro(props: LanCircleEuroProps): React.ReactElement;
export default LanCircleEuro;
