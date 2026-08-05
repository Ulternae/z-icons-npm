import React from 'react';

export interface LanClockEightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockEightRegular(props: LanClockEightRegularProps): React.ReactElement;
export default LanClockEightRegular;
