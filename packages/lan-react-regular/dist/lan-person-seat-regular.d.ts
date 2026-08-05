import React from 'react';

export interface LanPersonSeatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonSeatRegular(props: LanPersonSeatRegularProps): React.ReactElement;
export default LanPersonSeatRegular;
