import React from 'react';

export interface LanCircleQuarterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarterRegular(props: LanCircleQuarterRegularProps): React.ReactElement;
export default LanCircleQuarterRegular;
