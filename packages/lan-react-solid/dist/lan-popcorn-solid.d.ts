import React from 'react';

export interface LanPopcornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopcornSolid(props: LanPopcornSolidProps): React.ReactElement;
export default LanPopcornSolid;
