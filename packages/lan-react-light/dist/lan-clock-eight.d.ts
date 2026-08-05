import React from 'react';

export interface LanClockEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockEight(props: LanClockEightProps): React.ReactElement;
export default LanClockEight;
