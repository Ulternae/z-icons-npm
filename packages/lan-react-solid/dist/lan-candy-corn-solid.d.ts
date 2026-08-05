import React from 'react';

export interface LanCandyCornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyCornSolid(props: LanCandyCornSolidProps): React.ReactElement;
export default LanCandyCornSolid;
