import React from 'react';

export interface LanTrashClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrashClockThin: React.FC<LanTrashClockThinProps>;
export default LanTrashClockThin;
