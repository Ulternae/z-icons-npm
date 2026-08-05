import React from 'react';

export interface LanClockFiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFiveRegular(props: LanClockFiveRegularProps): React.ReactElement;
export default LanClockFiveRegular;
