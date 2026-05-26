import React from 'react';

export interface LanCameraShutterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraShutterThin: React.FC<LanCameraShutterThinProps>;
export default LanCameraShutterThin;
