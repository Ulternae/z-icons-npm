import React from 'react';

export interface LanCowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCowThin(props: LanCowThinProps): React.ReactElement;
export default LanCowThin;
