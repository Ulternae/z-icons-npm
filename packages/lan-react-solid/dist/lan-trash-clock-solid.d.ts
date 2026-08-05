import React from 'react';

export interface LanTrashClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashClockSolid(props: LanTrashClockSolidProps): React.ReactElement;
export default LanTrashClockSolid;
