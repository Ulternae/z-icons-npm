import React from 'react';

export interface LanInfinityThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfinityThin(props: LanInfinityThinProps): React.ReactElement;
export default LanInfinityThin;
