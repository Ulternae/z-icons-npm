import React from 'react';

export interface LanDaggerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDaggerSolid(props: LanDaggerSolidProps): React.ReactElement;
export default LanDaggerSolid;
