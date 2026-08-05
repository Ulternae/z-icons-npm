import React from 'react';

export interface MinaClockFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockFiveSolid(props: MinaClockFiveSolidProps): React.ReactElement;
export default MinaClockFiveSolid;
