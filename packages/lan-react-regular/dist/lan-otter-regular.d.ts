import React from 'react';

export interface LanOtterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOtterRegular(props: LanOtterRegularProps): React.ReactElement;
export default LanOtterRegular;
