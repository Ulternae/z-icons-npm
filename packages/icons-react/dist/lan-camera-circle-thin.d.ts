import React from 'react';

export interface LanCameraCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraCircleThin: React.FC<LanCameraCircleThinProps>;
export default LanCameraCircleThin;
