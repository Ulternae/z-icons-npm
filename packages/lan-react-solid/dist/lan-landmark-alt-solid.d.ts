import React from 'react';

export interface LanLandmarkAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkAltSolid(props: LanLandmarkAltSolidProps): React.ReactElement;
export default LanLandmarkAltSolid;
