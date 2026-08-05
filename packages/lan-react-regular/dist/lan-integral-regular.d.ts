import React from 'react';

export interface LanIntegralRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntegralRegular(props: LanIntegralRegularProps): React.ReactElement;
export default LanIntegralRegular;
