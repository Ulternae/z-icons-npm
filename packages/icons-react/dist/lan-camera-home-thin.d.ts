import React from 'react';

export interface LanCameraHomeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraHomeThin: React.FC<LanCameraHomeThinProps>;
export default LanCameraHomeThin;
