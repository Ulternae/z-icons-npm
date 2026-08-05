import React from 'react';

export interface LanClockTenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTenRegular(props: LanClockTenRegularProps): React.ReactElement;
export default LanClockTenRegular;
