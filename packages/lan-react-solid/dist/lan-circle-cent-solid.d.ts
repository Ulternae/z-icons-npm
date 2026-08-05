import React from 'react';

export interface LanCircleCentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleCentSolid(props: LanCircleCentSolidProps): React.ReactElement;
export default LanCircleCentSolid;
