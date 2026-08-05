import React from 'react';

export interface MinaClockTenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaClockTenSolid(props: MinaClockTenSolidProps): React.ReactElement;
export default MinaClockTenSolid;
