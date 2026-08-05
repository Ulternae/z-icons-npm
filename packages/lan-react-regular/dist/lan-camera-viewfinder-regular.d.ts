import React from 'react';

export interface LanCameraViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraViewfinderRegular(props: LanCameraViewfinderRegularProps): React.ReactElement;
export default LanCameraViewfinderRegular;
