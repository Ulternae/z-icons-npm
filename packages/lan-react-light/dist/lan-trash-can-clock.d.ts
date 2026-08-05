import React from 'react';

export interface LanTrashCanClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashCanClock(props: LanTrashCanClockProps): React.ReactElement;
export default LanTrashCanClock;
