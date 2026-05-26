import React from 'react';

export interface LanCameraViewfinderRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraViewfinderRegular: React.FC<LanCameraViewfinderRegularProps>;
export default LanCameraViewfinderRegular;
