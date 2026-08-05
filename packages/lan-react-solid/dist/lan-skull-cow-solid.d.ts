import React from 'react';

export interface LanSkullCowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCowSolid(props: LanSkullCowSolidProps): React.ReactElement;
export default LanSkullCowSolid;
