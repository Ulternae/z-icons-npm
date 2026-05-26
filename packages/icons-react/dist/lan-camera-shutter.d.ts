import React from 'react';

export interface LanCameraShutterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraShutter: React.FC<LanCameraShutterProps>;
export default LanCameraShutter;
