import React from 'react';

export interface LanScalpelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelSolid(props: LanScalpelSolidProps): React.ReactElement;
export default LanScalpelSolid;
