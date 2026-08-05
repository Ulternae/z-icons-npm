import React from 'react';

export interface LanPersonSeatWindowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatWindowRegular(props: LanPersonSeatWindowRegularProps): React.ReactElement;
export default LanPersonSeatWindowRegular;
