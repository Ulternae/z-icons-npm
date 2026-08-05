import React from 'react';

export interface LanLandmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLandmarkRegular(props: LanLandmarkRegularProps): React.ReactElement;
export default LanLandmarkRegular;
