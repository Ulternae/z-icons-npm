import React from 'react';

export interface LanLassoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoSolid(props: LanLassoSolidProps): React.ReactElement;
export default LanLassoSolid;
