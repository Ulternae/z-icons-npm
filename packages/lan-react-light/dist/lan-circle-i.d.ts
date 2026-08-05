import React from 'react';

export interface LanCircleIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleI(props: LanCircleIProps): React.ReactElement;
export default LanCircleI;
