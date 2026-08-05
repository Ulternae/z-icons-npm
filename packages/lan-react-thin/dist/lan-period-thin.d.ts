import React from 'react';

export interface LanPeriodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeriodThin(props: LanPeriodThinProps): React.ReactElement;
export default LanPeriodThin;
