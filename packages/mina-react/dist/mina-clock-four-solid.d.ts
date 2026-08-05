import React from 'react';

export interface MinaClockFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockFourSolid(props: MinaClockFourSolidProps): React.ReactElement;
export default MinaClockFourSolid;
