import React from 'react';

export interface LanIntegralProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntegral(props: LanIntegralProps): React.ReactElement;
export default LanIntegral;
