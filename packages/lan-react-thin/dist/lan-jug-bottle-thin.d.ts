import React from 'react';

export interface LanJugBottleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugBottleThin(props: LanJugBottleThinProps): React.ReactElement;
export default LanJugBottleThin;
