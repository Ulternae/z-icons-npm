import React from 'react';

export interface LanCameraShutterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraShutterSolid: React.FC<LanCameraShutterSolidProps>;
export default LanCameraShutterSolid;
