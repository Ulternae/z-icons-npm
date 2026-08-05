import React from 'react';

export interface LanClockOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockOne(props: LanClockOneProps): React.ReactElement;
export default LanClockOne;
