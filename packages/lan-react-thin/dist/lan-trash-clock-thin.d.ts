import React from 'react';

export interface LanTrashClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrashClockThin(props: LanTrashClockThinProps): React.ReactElement;
export default LanTrashClockThin;
