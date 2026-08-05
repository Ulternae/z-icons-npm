import React from 'react';

export interface LanClockDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockDeskSolid(props: LanClockDeskSolidProps): React.ReactElement;
export default LanClockDeskSolid;
