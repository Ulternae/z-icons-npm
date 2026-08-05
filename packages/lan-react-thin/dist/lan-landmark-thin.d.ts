import React from 'react';

export interface LanLandmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkThin(props: LanLandmarkThinProps): React.ReactElement;
export default LanLandmarkThin;
