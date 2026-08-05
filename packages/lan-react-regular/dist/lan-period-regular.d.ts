import React from 'react';

export interface LanPeriodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeriodRegular(props: LanPeriodRegularProps): React.ReactElement;
export default LanPeriodRegular;
