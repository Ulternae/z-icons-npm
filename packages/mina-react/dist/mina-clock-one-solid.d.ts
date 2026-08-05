import React from 'react';

export interface MinaClockOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockOneSolid(props: MinaClockOneSolidProps): React.ReactElement;
export default MinaClockOneSolid;
