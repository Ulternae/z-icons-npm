import React from 'react';

export interface LanClockThreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockThreeThin(props: LanClockThreeThinProps): React.ReactElement;
export default LanClockThreeThin;
