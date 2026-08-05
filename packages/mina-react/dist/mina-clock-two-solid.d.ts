import React from 'react';

export interface MinaClockTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTwoSolid(props: MinaClockTwoSolidProps): React.ReactElement;
export default MinaClockTwoSolid;
