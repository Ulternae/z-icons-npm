import React from 'react';

export interface LanUserClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserClockRegular(props: LanUserClockRegularProps): React.ReactElement;
export default LanUserClockRegular;
