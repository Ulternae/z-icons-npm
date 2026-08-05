import React from 'react';

export interface LanPlaneUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneUpSolid(props: LanPlaneUpSolidProps): React.ReactElement;
export default LanPlaneUpSolid;
