import React from 'react';

export interface LanTrashClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashClock: React.FC<LanTrashClockProps>;
export default LanTrashClock;
