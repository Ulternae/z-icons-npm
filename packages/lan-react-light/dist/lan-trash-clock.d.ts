import React from 'react';

export interface LanTrashClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashClock(props: LanTrashClockProps): React.ReactElement;
export default LanTrashClock;
