import React from 'react';

export interface LanClockNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockNine(props: LanClockNineProps): React.ReactElement;
export default LanClockNine;
