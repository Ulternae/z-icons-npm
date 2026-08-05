import React from 'react';

export interface LanJugRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugRegular(props: LanJugRegularProps): React.ReactElement;
export default LanJugRegular;
