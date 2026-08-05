import React from 'react';

export interface LanGrapesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrapesSolid(props: LanGrapesSolidProps): React.ReactElement;
export default LanGrapesSolid;
