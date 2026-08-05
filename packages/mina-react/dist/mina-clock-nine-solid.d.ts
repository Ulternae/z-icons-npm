import React from 'react';

export interface MinaClockNineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockNineSolid(props: MinaClockNineSolidProps): React.ReactElement;
export default MinaClockNineSolid;
