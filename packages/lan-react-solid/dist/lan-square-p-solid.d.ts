import React from 'react';

export interface LanSquarePSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePSolid(props: LanSquarePSolidProps): React.ReactElement;
export default LanSquarePSolid;
