import React from 'react';

export interface LanJugBottleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugBottle(props: LanJugBottleProps): React.ReactElement;
export default LanJugBottle;
