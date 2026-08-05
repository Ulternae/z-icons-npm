import React from 'react';

export interface LanSirenOnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSirenOnRegular(props: LanSirenOnRegularProps): React.ReactElement;
export default LanSirenOnRegular;
