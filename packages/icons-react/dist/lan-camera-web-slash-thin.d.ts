import React from 'react';

export interface LanCameraWebSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCameraWebSlashThin: React.FC<LanCameraWebSlashThinProps>;
export default LanCameraWebSlashThin;
