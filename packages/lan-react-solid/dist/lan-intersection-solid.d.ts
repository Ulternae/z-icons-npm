import React from 'react';

export interface LanIntersectionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIntersectionSolid(props: LanIntersectionSolidProps): React.ReactElement;
export default LanIntersectionSolid;
