import React from 'react';

export interface LanCircleJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleJ(props: LanCircleJProps): React.ReactElement;
export default LanCircleJ;
