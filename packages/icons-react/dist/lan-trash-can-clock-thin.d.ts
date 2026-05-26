import React from 'react';

export interface LanTrashCanClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanClockThin: React.FC<LanTrashCanClockThinProps>;
export default LanTrashCanClockThin;
