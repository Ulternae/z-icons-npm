import React from 'react';

export interface LanSkullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullSolid(props: LanSkullSolidProps): React.ReactElement;
export default LanSkullSolid;
