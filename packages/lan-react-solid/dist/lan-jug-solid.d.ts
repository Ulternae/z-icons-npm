import React from 'react';

export interface LanJugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJugSolid(props: LanJugSolidProps): React.ReactElement;
export default LanJugSolid;
