import React from 'react';

export interface LanCircleAProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleA(props: LanCircleAProps): React.ReactElement;
export default LanCircleA;
