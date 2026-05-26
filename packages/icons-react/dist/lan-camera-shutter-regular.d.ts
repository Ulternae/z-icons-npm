import React from 'react';

export interface LanCameraShutterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraShutterRegular: React.FC<LanCameraShutterRegularProps>;
export default LanCameraShutterRegular;
