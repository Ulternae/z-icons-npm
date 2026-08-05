import React from 'react';

export interface LanObjectIntersectSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanObjectIntersectSolid(props: LanObjectIntersectSolidProps): React.ReactElement;
export default LanObjectIntersectSolid;
