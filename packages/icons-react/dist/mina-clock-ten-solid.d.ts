import React from 'react';

export interface MinaClockTenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTenSolid: React.FC<MinaClockTenSolidProps>;
export default MinaClockTenSolid;
