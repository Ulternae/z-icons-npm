import React from 'react';

export interface LanLandmarkFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkFlagThin(props: LanLandmarkFlagThinProps): React.ReactElement;
export default LanLandmarkFlagThin;
