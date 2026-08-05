import React from 'react';

export interface LanSkullCrossbonesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCrossbonesSolid(props: LanSkullCrossbonesSolidProps): React.ReactElement;
export default LanSkullCrossbonesSolid;
