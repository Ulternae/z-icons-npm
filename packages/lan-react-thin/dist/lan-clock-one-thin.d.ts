import React from 'react';

export interface LanClockOneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOneThin(props: LanClockOneThinProps): React.ReactElement;
export default LanClockOneThin;
