import React from 'react';

export interface LanCameraRotateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraRotateThin: React.FC<LanCameraRotateThinProps>;
export default LanCameraRotateThin;
