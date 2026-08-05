import React from 'react';

export interface LanJugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugThin(props: LanJugThinProps): React.ReactElement;
export default LanJugThin;
