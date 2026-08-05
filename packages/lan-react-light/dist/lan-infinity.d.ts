import React from 'react';

export interface LanInfinityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfinity(props: LanInfinityProps): React.ReactElement;
export default LanInfinity;
