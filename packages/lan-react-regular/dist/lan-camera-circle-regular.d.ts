import React from 'react';

export interface LanCameraCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircleRegular(props: LanCameraCircleRegularProps): React.ReactElement;
export default LanCameraCircleRegular;
