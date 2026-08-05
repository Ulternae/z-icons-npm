import React from 'react';

export interface LanClockFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFive(props: LanClockFiveProps): React.ReactElement;
export default LanClockFive;
