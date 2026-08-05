import React from 'react';

export interface LanRoadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadSolid(props: LanRoadSolidProps): React.ReactElement;
export default LanRoadSolid;
