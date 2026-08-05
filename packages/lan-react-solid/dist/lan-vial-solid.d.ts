import React from 'react';

export interface LanVialSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVialSolid(props: LanVialSolidProps): React.ReactElement;
export default LanVialSolid;
