import React from 'react';

export interface LanPoopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoopSolid(props: LanPoopSolidProps): React.ReactElement;
export default LanPoopSolid;
