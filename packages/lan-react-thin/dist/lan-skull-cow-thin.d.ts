import React from 'react';

export interface LanSkullCowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCowThin(props: LanSkullCowThinProps): React.ReactElement;
export default LanSkullCowThin;
