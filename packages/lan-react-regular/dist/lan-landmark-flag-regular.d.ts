import React from 'react';

export interface LanLandmarkFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkFlagRegular(props: LanLandmarkFlagRegularProps): React.ReactElement;
export default LanLandmarkFlagRegular;
