import React from 'react';

export interface LanPersonCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonCircleCheck(props: LanPersonCircleCheckProps): React.ReactElement;
export default LanPersonCircleCheck;
