import React from 'react';

export interface LanGrillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrillSolid(props: LanGrillSolidProps): React.ReactElement;
export default LanGrillSolid;
