import React from 'react';

export interface LanCameraViewfinderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraViewfinder: React.FC<LanCameraViewfinderProps>;
export default LanCameraViewfinder;
