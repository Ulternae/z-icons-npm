import React from 'react';

export interface LanClockTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTwo(props: LanClockTwoProps): React.ReactElement;
export default LanClockTwo;
