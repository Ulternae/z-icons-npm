import React from 'react';

export interface LanIntegralThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntegralThin(props: LanIntegralThinProps): React.ReactElement;
export default LanIntegralThin;
