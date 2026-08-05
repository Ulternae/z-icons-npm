import React from 'react';

export interface LanClockFourRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockFourRegular(props: LanClockFourRegularProps): React.ReactElement;
export default LanClockFourRegular;
