import React from 'react';

export interface MinaClockThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockThreeSolid(props: MinaClockThreeSolidProps): React.ReactElement;
export default MinaClockThreeSolid;
