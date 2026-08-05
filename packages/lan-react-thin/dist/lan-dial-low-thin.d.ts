import React from 'react';

export interface LanDialLowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialLowThin(props: LanDialLowThinProps): React.ReactElement;
export default LanDialLowThin;
