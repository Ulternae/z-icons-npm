import React from 'react';

export interface LanLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkSolid(props: LanLandmarkSolidProps): React.ReactElement;
export default LanLandmarkSolid;
