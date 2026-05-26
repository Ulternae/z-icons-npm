import React from 'react';

export interface LanTrashCanClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashCanClock: React.FC<LanTrashCanClockProps>;
export default LanTrashCanClock;
