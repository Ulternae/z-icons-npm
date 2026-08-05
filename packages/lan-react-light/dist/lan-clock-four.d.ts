import React from 'react';

export interface LanClockFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFour(props: LanClockFourProps): React.ReactElement;
export default LanClockFour;
