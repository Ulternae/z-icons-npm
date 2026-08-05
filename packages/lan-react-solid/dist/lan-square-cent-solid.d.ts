import React from 'react';

export interface LanSquareCentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareCentSolid(props: LanSquareCentSolidProps): React.ReactElement;
export default LanSquareCentSolid;
