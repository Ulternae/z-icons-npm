import React from 'react';

export interface LanTrashCanClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanClockSolid: React.FC<LanTrashCanClockSolidProps>;
export default LanTrashCanClockSolid;
