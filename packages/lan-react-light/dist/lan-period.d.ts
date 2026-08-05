import React from 'react';

export interface LanPeriodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeriod(props: LanPeriodProps): React.ReactElement;
export default LanPeriod;
