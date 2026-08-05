import React from 'react';

export interface LanJugBottleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugBottleSolid(props: LanJugBottleSolidProps): React.ReactElement;
export default LanJugBottleSolid;
