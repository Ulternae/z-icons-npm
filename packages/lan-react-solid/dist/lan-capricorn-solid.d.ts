import React from 'react';

export interface LanCapricornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapricornSolid(props: LanCapricornSolidProps): React.ReactElement;
export default LanCapricornSolid;
