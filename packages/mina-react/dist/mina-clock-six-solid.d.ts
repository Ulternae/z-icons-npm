import React from 'react';

export interface MinaClockSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockSixSolid(props: MinaClockSixSolidProps): React.ReactElement;
export default MinaClockSixSolid;
