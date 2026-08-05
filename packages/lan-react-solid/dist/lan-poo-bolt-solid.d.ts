import React from 'react';

export interface LanPooBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooBoltSolid(props: LanPooBoltSolidProps): React.ReactElement;
export default LanPooBoltSolid;
