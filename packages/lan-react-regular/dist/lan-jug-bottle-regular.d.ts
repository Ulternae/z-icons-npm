import React from 'react';

export interface LanJugBottleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugBottleRegular(props: LanJugBottleRegularProps): React.ReactElement;
export default LanJugBottleRegular;
