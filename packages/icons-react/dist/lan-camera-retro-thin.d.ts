import React from 'react';

export interface LanCameraRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRetroThin: React.FC<LanCameraRetroThinProps>;
export default LanCameraRetroThin;
