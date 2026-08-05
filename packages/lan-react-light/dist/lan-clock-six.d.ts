import React from 'react';

export interface LanClockSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSix(props: LanClockSixProps): React.ReactElement;
export default LanClockSix;
