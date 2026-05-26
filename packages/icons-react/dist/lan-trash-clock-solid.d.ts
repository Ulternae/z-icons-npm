import React from 'react';

export interface LanTrashClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashClockSolid: React.FC<LanTrashClockSolidProps>;
export default LanTrashClockSolid;
