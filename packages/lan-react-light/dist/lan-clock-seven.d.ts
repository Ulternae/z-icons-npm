import React from 'react';

export interface LanClockSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockSeven(props: LanClockSevenProps): React.ReactElement;
export default LanClockSeven;
