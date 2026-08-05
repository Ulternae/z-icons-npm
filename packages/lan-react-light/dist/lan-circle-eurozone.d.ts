import React from 'react';

export interface LanCircleEurozoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEurozone(props: LanCircleEurozoneProps): React.ReactElement;
export default LanCircleEurozone;
