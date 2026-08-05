import React from 'react';

export interface LanClockTenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTenSolid(props: LanClockTenSolidProps): React.ReactElement;
export default LanClockTenSolid;
