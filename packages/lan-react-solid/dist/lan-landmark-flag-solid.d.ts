import React from 'react';

export interface LanLandmarkFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkFlagSolid(props: LanLandmarkFlagSolidProps): React.ReactElement;
export default LanLandmarkFlagSolid;
