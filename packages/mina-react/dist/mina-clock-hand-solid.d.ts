import React from 'react';

export interface MinaClockHandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockHandSolid(props: MinaClockHandSolidProps): React.ReactElement;
export default MinaClockHandSolid;
