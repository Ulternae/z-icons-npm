import React from 'react';

export interface LanUserClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserClockSolid(props: LanUserClockSolidProps): React.ReactElement;
export default LanUserClockSolid;
