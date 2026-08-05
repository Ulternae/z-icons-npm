import React from 'react';

export interface LanLandmarkFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkFlag(props: LanLandmarkFlagProps): React.ReactElement;
export default LanLandmarkFlag;
