import React from 'react';

export interface LanLandmarkAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkAltThin(props: LanLandmarkAltThinProps): React.ReactElement;
export default LanLandmarkAltThin;
