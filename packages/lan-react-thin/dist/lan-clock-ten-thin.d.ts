import React from 'react';

export interface LanClockTenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockTenThin(props: LanClockTenThinProps): React.ReactElement;
export default LanClockTenThin;
